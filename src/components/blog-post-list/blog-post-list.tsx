import { sanityFetch } from "@/src/sanity/lib/live";
import { GetPostResult } from "@/src/sanity/types";

import HeroImage from "../hero-image/hero-image";
import LinkButton from "../link-button/link-button";
import BlogPostCard from "./blog-post-card";
import * as styles from "./blogpostcard.module.css";

type BlogPostListProps = {
  query: string;
  params?: Promise<{
    slug: string;
  }>;
};

const BlogPostList = async ({ query, params }: BlogPostListProps) => {
  const { data: posts } = await sanityFetch({ query, params });

  const {
    title,
    mainImageSrc,
    mainImageAltText,
    mainImageAspectRatio,
    excerpt,
    slug,
  } = posts[0];

  const renderedPosts = posts.map((post: GetPostResult, i: number) => {
    if (i === 0) {
      return;
    } else {
      return (
        <div key={post?._id}>
          <BlogPostCard data={post} />
        </div>
      );
    }
  });

  return (
    <div>
      <h1>{`Latest - ${title}`}</h1>
      {mainImageSrc && (
        <HeroImage
          imageSrc={mainImageSrc}
          imageAltText={mainImageAltText || ""}
          imageAspectRatio={mainImageAspectRatio || 0}
        />
      )}
      <div style={{ padding: "1em 1em 0" }}>
        <p>{excerpt}</p>
        <div className={styles.cardButton}>
          <LinkButton slug={slug} />
        </div>
      </div>
      {renderedPosts}
    </div>
  );
};

export default BlogPostList;
