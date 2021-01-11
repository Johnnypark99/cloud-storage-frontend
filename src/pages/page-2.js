import React from "react"
import { Link,graphql,useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return(
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <ol>
      {data.allMarkdownRemark.edges.map((edge) => {
        return(
          <li>
            <h2> {edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        )
      })}
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default SecondPage
