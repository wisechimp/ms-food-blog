import { getBlogPosts } from "@/sanity/sanity-utils"
import BlogPostList from "@/src/components/blogpostlist/BlogPostList"

const Home = async () => {

  return (
    <div>
      {/* Motto? - She who shares wins... */}
      <BlogPostList fetchData={() => getBlogPosts()}/>
    </div>
  )
}

export default Home
