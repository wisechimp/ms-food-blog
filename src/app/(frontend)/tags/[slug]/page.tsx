import BlogPostList from "@/src/components/blogpostlist/blog-post-list";
import { sanityFetch } from "@/src/sanity/lib/live";
import { getTag, getTaggedPosts } from "@/src/sanity/lib/queries";

type TagPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const TagPage = async ({ params }: TagPageProps) => {
  const { data: tag } = await sanityFetch({
    query: getTag,
    params: await params,
  });
  const { title, description } = tag;
  console.log(`Tag Data is: ${tag}`);

  return (
    <div>
      <h2>The following posts are tagged {title}:</h2>
      <p>{description}</p>
      <BlogPostList query={getTaggedPosts} params={params} />
    </div>
  );
};

export default TagPage;
