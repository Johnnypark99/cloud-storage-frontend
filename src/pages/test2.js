import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Test2Page extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://johnnypark.ca/api/imagelist").then(response => {
    return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        loading: false,
        fetchedData: json
      })
    })
    }
  render() {
    const { loading, fetchedData } = this.state
    if (!loading) {
      console.log("fetched", fetchedData.map(arr => arr.title))
    }
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
            fetchedData.map(arr =>
              <p key={arr.title}>{arr.title}</p>
            )
          )
        }
        <p>+++++++++++++++++++++</p>
        <ol>
        </ol>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default Test2Page
