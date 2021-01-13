import React from "react"
import Layout from "../components/layout"

const Upload = () => (
  <Layout>
    <body>
      <h2>Upload file</h2>
      <form method="post" enctype="multipart/form-data" action="https://johnnypark.ca/api/image_upload/">
        <label for="title">Title: </label>
        <input name="title" /><br /><br />
        <label for="owner">Owner: </label>
        <input name="owner" /><br /><br />
        <input name="file" type="file" multiple />
        <button type="submit" class="btn btn-primary">Upload file</button>
      </form>
    </body>
  </Layout>
)

export default Upload
