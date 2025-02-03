import Image from "next/image";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import BlogPost from "@/src/types/BlogPost";

import LinkButton from "../link-button/link-button";
import * as styles from "./blogpostcard.module.css";

type BlogPostCardProps = {
  data: BlogPost;
};

dayjs.extend(advancedFormat);

const BlogPostCard = ({ data }: BlogPostCardProps) => {
  const {
    title,
    publishedAt,
    excerpt,
    slug,
    mainImageSrc,
    mainImageAltText,
    mainImageAspectRatio,
  } = data;
  const imageHeight = 100;
  const imageWidth = imageHeight * mainImageAspectRatio;

  return (
    <div className={styles.card}>
      <div>
        <h2>{title}</h2>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardText}>
          <p>
            Written by Ma Sharp - {dayjs(publishedAt).format("Do MMMM YYYY")}
          </p>
          <p>{excerpt}</p>
        </div>
        <div className={styles.cardThumb}>
          <Image
            src={mainImageSrc}
            alt={mainImageAltText}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
      <div className={styles.cardButton}>
        <LinkButton slug={slug} />
      </div>
    </div>
  );
};

export default BlogPostCard;
