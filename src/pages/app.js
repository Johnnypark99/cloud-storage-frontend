
import React, { useCallback } from "react";
// Import the dropzone component
import Dropzone from "../components/drop";
import Layout from "../components/layout"


import "../components/drop.css";

function App() {
  // onDrop function  
  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);

    const formData = new FormData();
    formData.append('File', acceptedFiles);
    console.log(formData)
     const requestOptions = {
      method: 'POST',
      body: formData
    };

    fetch("https://johnnypark.ca/api/image_upload/", requestOptions)
      .then(response => response.json())
      .then(result => console.log('Success:', result));
  }, []);

  // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
  return (
    <Layout>
      <main className="App">
        <h1 className="text-center">Drag and Drop Example</h1>
        <Dropzone onDrop={onDrop} />
      </main>
    </Layout>
  );
}

export default App;