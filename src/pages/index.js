import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../components/upload"

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
    // fetchedData.map(arr =>{
    //   console.log(arr.file.split('/').pop());
    // })
    return (
      <Layout>
        <SEO title="Home" />
        <h2>Files</h2>
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map(arr =>
                  <tr>
                    <td><Link to={"https://johnnypark.ca/api/image/"+arr.id}>{arr.file.split('/').pop()}</Link></td>
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
        <App/>
        <br></br><br></br>
      <a href="/instructions/">Instructions & Explanations</a>
      </Layout>
    )
  }
}

export default IndexPage
