import React from "react";
import { useDropzone } from "react-dropzone";


const getClassName = (className, isActive) => {
  if (!isActive) return className;
  return `${className} ${className}-active`;
};

const Dropzone = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  return (
    <div className={getClassName("dropzone", isDragActive)} {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content"></p>
        ) : (
          <p className="dropzone-content">
            Drag and Drop here
          </p>
        )}
      </div>
    </div>
  );
};

export default Dropzone;