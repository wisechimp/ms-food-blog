import React, { useState, useEffect } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SummaryContentBanner from "../components/summarycontentbanner/SummaryContentBanner"
import CommentCard from "../components/comments/CommentCard"
import * as styles from "./blogpost.module.css"

const Blogpost = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const image = getImage(frontmatter.imageSrc)

  const [postComments, setPostComments] = useState([])

  useEffect(() => {
    const slug = window.location.pathname.replace("/posts/", "")
    const fetchApi = `https://ms-food-blog.herokuapp.com/comments/${slug}`
    console.log(fetchApi)
    fetch(`${fetchApi}`)
      .then(response => response.json())
      .then(comment => {
        setPostComments(comment)
      })
      .then(console.log(postComments))
  }, [])

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
      <div>
        <h3>Comments:</h3>
        {!postComments.length ? (
          <p>
            There are no comments yet. Signup or Login to join the conversation.
          </p>
        ) : (
          <div>
            {postComments.map(comment => {
              return (
                <CommentCard
                  key={comment.id}
                  commentUserName={comment.username}
                  commentDate={comment.date}
                  commentText={comment.text}
                />
              )
            })}
          </div>
        )}
      </div>
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
