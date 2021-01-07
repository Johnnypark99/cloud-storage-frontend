
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Upload = () => (
<body>
  <h2>Upload file</h2>
  <form method="post" enctype="multipart/form-data">
	<input name="Browse.." type="file" multiple/>
    <button type="submit" class="btn btn-primary">Upload file</button>
  </form>
</body>
)

export default Upload
