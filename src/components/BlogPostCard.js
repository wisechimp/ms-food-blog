import React from "react"
import { Link } from "gatsby"

const BlogPostCard = ({ title, description, date, author, slug }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        Written by {author} on {date}
      </p>
      <p>{description}</p>
      <Link to={slug}>Read More</Link>
    </div>
  )
}

export default BlogPostCard
