import { getTag, getTaggedBlogPosts } from "@/sanity/sanity-utils"
import BlogPostList from "@/src/components/blogpostlist/BlogPostList"

type TagPageProps = {
  params: {
    slug: string
  }
}

const TagPage = async ({ params }: TagPageProps) => {
  const { slug } = params
  const tagData = await getTag(slug)
  console.log("Tag Data is: " + tagData)
  
  return (
    <div>
      <h2>The following posts are tagged {slug}:</h2>
      <p>{tagData.description}</p>
      <BlogPostList fetchData={() => getTaggedBlogPosts(slug)} />
    </div>
  )
}

export default TagPage