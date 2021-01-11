import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class TestPage extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        fetchedData: json.abilities,
        loading: false
      })
    })
  }
  render() {
    const { loading, fetchedData } = this.state
    if (!loading) {
      console.log("fetched", fetchedData.map(arr => arr.ability.name))
    }
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
            fetchedData.map(arr =>
              <p key={arr.ability.name}>{arr.ability.name}</p>
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

export default TestPage
