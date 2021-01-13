import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
    fetch("https://johnnypark.ca/api/imagelist").then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        loading: false,
        fetchedData: json
      })
    })
  }
  render() {
    const { loading, fetchedData } = this.state
    return (
      <Layout>
        <SEO title="Home" />
        <h2>Files</h2>
        <p>
        <button onClick={()=>{window.location='/upload/'}}>Upload</button> <br />
        </p>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Owner</th>
              <th>Download</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map(arr =>
                  <tr>
                    <td>{arr.title}</td>
                    <td>{arr.owner}</td>
                    <td><button onClick={()=>{window.location='https://johnnypark.ca/api/image/'+arr.id}}>Download</button></td>
                    <td>
                      <form method="post" action={"https://johnnypark.ca/api/image_delete/"+arr.id}>
                        <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                      </form>
                    </td>
                  </tr>
                )
            }
          </tbody>
        </table>
      <a href="/instructions/">Instructions & Explanations</a>
      </Layout>
    )
  }
}

export default IndexPage
