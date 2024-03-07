import "./index.css"
import React from "react"
import { Link, PageProps, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { clsx } from "clsx"

import Layout from "~/react/components/layout"
import Seo from "~/react/components/seo"
import { Post } from "~/types"

const IndexPage = ({ data }: PageProps<QueryResult>) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className={clsx("textCenter")}>
        <StaticImage
          src="../assets/images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>
      <ul>
        {posts.map(post => (
          <li key={post.node.id}>{post.node.frontmatter.title}</li>
        ))}
      </ul>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

interface QueryResult {
  allMarkdownRemark: {
    edges: Post[]
  }
}

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            summary
            categories
          }
        }
      }
    }
  }
`
