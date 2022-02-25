import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SummaryContentBanner from "../components/summarycontentbanner/SummaryContentBanner"
import CommentsList from "../components/commentslist/CommentsList"
import * as styles from "./blogpost.module.css"

const Blogpost = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const image = getImage(frontmatter.imageSrc)

  return (
    <Layout title={frontmatter.title}>
      <div className={styles.blogpostMetadata}>
        <p>Author: {frontmatter.author}</p>
        <p>Posted on: {frontmatter.date}</p>
      </div>
      <div className={styles.blogpostImage}>
        <GatsbyImage image={image} alt="Yak yak" />
      </div>
      <div className={styles.blogpostBody}>
        <div className={styles.blogpostText}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className={styles.blogpostTagBox}>
          <SummaryContentBanner tags={frontmatter.tags} />
        </div>
      </div>
      <div>{/* <h2>Comments:</h2>
        <CommentsList /> */}</div>
    </Layout>
  )
}

export default Blogpost

export const query = graphql`
  query PostsById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        slug
        date(formatString: "Do MMMM YYYY")
        author
        tags
        imageSrc {
          childImageSharp {
            gatsbyImageData(
              transformOptions: { fit: CONTAIN }
              width: 800
              backgroundColor: "#00000000"
            )
          }
        }
      }
    }
  }
`
