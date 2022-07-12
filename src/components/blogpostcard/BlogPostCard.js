import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import LinkButton from "../linkbutton/LinkButton"
import * as cardStyles from "./blogpostcard.module.css"

const BlogPostCard = ({ title, children, date, author, slug, imageSrc }) => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.cardTitle}>
        <h2>{title}</h2>
      </div>
      <div className={cardStyles.cardBody}>
        <div className={cardStyles.cardText}>
          <p>
            Written by {author} on {date}
          </p>
          {children}
        </div>
        <div className={cardStyles.cardThumb}>
          <GatsbyImage image={imageSrc} alt="" />
        </div>
      </div>
      <div className={cardStyles.cardButton}>
        <LinkButton target={slug} text="Read More..." />
      </div>
    </div>
  )
}

export default BlogPostCard
