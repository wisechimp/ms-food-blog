import { getBlogPosts } from "@/sanity/sanity-utils"
import BlogPostCard from "./BlogPostCard"

const BlogPostList = async () => {
  const blogPosts = await getBlogPosts()

  const renderedPosts = blogPosts.map((blogPost, i) => {
    if (i === 0) {
      return
    } else {
    return (
      <div key={blogPost._id}>
        <BlogPostCard data={blogPost} />
      </div>
    )
    }
  })

  return(
    <div>
      {renderedPosts}
    </div>
  )
}

export default BlogPostList