import React, { useCallback } from "react";
// Import the dropzone component
import Dropzone from "./drop";
import Layout from "./layout"


import "../components/drop.css";

function App() {
  // onDrop function  
  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);

    const formData = new FormData();
    let file;
    for(file in acceptedFiles){
      formData.append("file", acceptedFiles[file]);
    }

    console.log(formData.getAll("file"));
     const requestOptions = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      withCredentials: true,
      body: formData,
    };

    fetch("https://johnnypark.ca/api/image_upload/", requestOptions).then(
      response => {
        window.location.reload();
      return response
      })

  }, []);

  // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
  return (
      <main className="App">
        <Dropzone onDrop={onDrop} />
      </main>
  );
}

export default App;