import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
 <body>
         <h2>Files</h2>
         <p>
	    	<Link to="/upload/">Upload</Link> <br />
         </p>
     <table class="table mb-0">
         <thead>
         <tr>
             <th>Title</th>
             <th>Owner</th>
             <th>Download</th>
             <th>Delete</th>
         </tr>
         </thead>
     </table>
 </body>
)

export default IndexPage
