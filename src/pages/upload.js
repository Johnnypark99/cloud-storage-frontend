// import React from "react"
// import Layout from "../components/layout"

// const Upload = () => (
//   <Layout>
//     <body>
//       <h2>Upload file</h2>
//       <form method="post" enctype="multipart/form-data" action="https://johnnypark.ca/api/image_upload/" multiple>
//         <input name="file" type="file" multiple />
//         <button type="submit" class="btn btn-primary">Upload file</button>
//       </form>
//     </body>
//   </Layout>
// )

// export default Upload

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
    //formData.append(acceptedFiles[0]);
    // for (file in acceptedFiles){
    //   formData.append('file', file)
    // }    
    let file;
    for(file in acceptedFiles){
      formData.append("file", acceptedFiles[file]);
    }

    console.log(formData.getAll("file"));
     const requestOptions = {
      method: 'POST',
      body: formData,
    };

    fetch("http://localhost:3000/api/image_upload/", requestOptions).then(
      response => {
      return response
      }).then(
        result => console.log('Success:', result
        ))

  }, []);

  // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
  return (
    <Layout>
      <main className="App">
        <h1 className="text-center">Upload files</h1>
        <Dropzone onDrop={onDrop} />
      </main>
    </Layout>
  );
}

export default App;