import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostCard = ({ title, description, date, author, slug, image }) => {
  const imageData = getImage(image)
  console.log({imageData})
  return (
    <div>
      <h3>{title}</h3>
      <p>
        Written by {author} on {date}
      </p>
      <p>{description}</p>
      <GatsbyImage image={imageData} alt=""/>
      <Link to={slug}>Read More</Link>
    </div>
  )
}

export default BlogPostCard
