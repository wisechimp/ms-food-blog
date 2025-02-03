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
        <p>Author: {author.name}</p>
        <p>Posted on: {dayjs(publishedAt).format("Do MMMM YYYY")}</p>
      </div>
      <HeroImage
        imageSrc={mainImageSrc}
        imageAltText={mainImageAltText}
        imageAspectRatio={mainImageAspectRatio}
      />
      <div className={styles.blogpostBody}>
        <div className={styles.blogpostText}>
          <PortableText value={body} components={components} />
        </div>
        <div className={styles.blogpostTagBox}>
          <TagsBannerBox tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
