import Image from "next/image";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { GetPostResult } from "@/src/sanity/types";

import LinkButton from "../link-button/link-button";
import * as styles from "./blogpostcard.module.css";

dayjs.extend(advancedFormat);

type BlogPostCardProps = {
  data: GetPostResult;
};

const BlogPostCard = ({ data }: BlogPostCardProps) => {
  if (!data) {
    return null;
  }
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
  const imageWidth = imageHeight * (mainImageAspectRatio ?? 4 / 3);

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
          {mainImageSrc && (
            <Image
              src={mainImageSrc}
              alt={
                mainImageAltText ||
                "Apologies, there should be text describing the image here."
              }
              width={imageWidth}
              height={imageHeight}
            />
          )}
        </div>
      </div>
      <div className={styles.cardButton}>
        <LinkButton slug={slug || "/404"} />
      </div>
    </div>
  );
};

export default BlogPostCard;
