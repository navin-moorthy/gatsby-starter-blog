import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { totalCount, edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Navin's Blog</h1>
    </div>
    {edges.map(
      ({
        node: {
          id,
          frontmatter: { date, description, title },
          excerpt,
        },
      }) => (
        <div key={id}>
          <h2>
            {title}-{date}
          </h2>
          <p>{excerpt}</p>
        </div>
      )
    )}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
  }
`
