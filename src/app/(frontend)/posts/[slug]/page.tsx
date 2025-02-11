import { redirect } from "next/navigation";

import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import components from "@/src/components/custom-portable-text-components/custom-portable-text-components";
import HeroImage from "@/src/components/hero-image/hero-image";
import TagsBannerBox from "@/src/components/tags-banner-box/tags-banner-box";
import { sanityFetch } from "@/src/sanity/lib/live";
import { getPost } from "@/src/sanity/lib/queries";

import * as styles from "./postpage.module.css";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

dayjs.extend(advancedFormat);

const PostPage = async ({ params }: PostPageProps) => {
  const { data: post } = await sanityFetch({
    query: getPost,
    params: await params,
  });

  if (!post) {
    return redirect("/404");
  }

  const {
    title,
    author,
    body,
    publishedAt,
    mainImageAltText,
    mainImageSrc,
    mainImageAspectRatio,
    tags,
  } = post;

  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.blogpostMetadata}>
        <p>Author: {author?.name || "Ma Sharp"}</p>
        <p>Posted on: {dayjs(publishedAt).format("Do MMMM YYYY")}</p>
      </div>
      {mainImageSrc && (
        <HeroImage
          imageSrc={mainImageSrc}
          imageAltText={
            mainImageAltText ||
            "Apologies, there should be text describing the image here."
          }
          imageAspectRatio={mainImageAspectRatio || 4 / 3}
        />
      )}
      <div className={styles.blogpostBody}>
        <div className={styles.blogpostText}>
          {body && <PortableText value={body} components={components} />}
        </div>
        <div className={styles.blogpostTagBox}>
          {tags && <TagsBannerBox tags={tags} />}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
