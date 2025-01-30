import BlogPostList from "@/src/components/blogpostlist/blog-post-list";
import { sanityFetch } from "@/src/sanity/lib/live";
import { getTag } from "@/src/sanity/lib/queries";

type TagPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const TagPage = async ({ params }: TagPageProps) => {
  const { data: tag } = await sanityFetch({
    query: getTag,
    params: params,
  });
  const { title, description } = tag;
  console.log(`Tag Data is: ${tag}`);

  return (
    <div>
      <h2>The following posts are tagged {(await params).slug}:</h2>
      <p>{description}</p>
      <BlogPostList fetchData={() => getTaggedBlogPosts(slug)} />
    </div>
  );
};

export default TagPage;
