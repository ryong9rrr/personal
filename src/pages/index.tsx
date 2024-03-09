import "./index.css"
import React from "react"
import { Link, PageProps, graphql } from "gatsby"
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image"
import { clsx } from "clsx"

import Layout from "~/react/components/layout"
import Seo from "~/react/components/seo"

const IndexPage = ({ data }: PageProps<QueryResult>) => {
  const posts = data.allMarkdownRemark.edges

  console.log(posts)

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
          <li key={post.node.id}>
            {
              <img
                {...post.node.frontmatter.thumbnail?.childImageSharp
                  .gatsbyImageData.images.fallback}
              />
            }
            <div>{post.node.frontmatter.title}</div>
          </li>
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

type Post = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      } | null
    }
  }
}

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`
