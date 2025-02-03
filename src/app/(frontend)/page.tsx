import BlogPostList from "@/src/components/blogpostlist/blog-post-list";
import { getAllPosts } from "@/src/sanity/lib/queries";

const Home = () => {
  return (
    <div>
      <BlogPostList query={getAllPosts} />
    </div>
  );
};

export default Home;
