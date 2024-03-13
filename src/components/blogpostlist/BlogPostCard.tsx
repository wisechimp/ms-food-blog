import React from "react"
import Image from "next/image"

import * as styles from "./blogpostcard.module.css"
import BlogPost from "@/src/types/BlogPost"
import Link from "next/link"
import dayjs from "dayjs"
import advancedFormat from 'dayjs/plugin/advancedFormat'

type BlogPostCardProps = {
  data: BlogPost
}

dayjs.extend(advancedFormat)

const BlogPostCard = ({
  data
}: BlogPostCardProps) => {
  const { title, publishedAt, excerpt, slug, mainImageSrc, mainImageAltText, mainImageAspectRatio } = data
  const imageHeight = 100
  let imageWidth = imageHeight * mainImageAspectRatio

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
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
        <Link href={`/posts/${slug}`}>Read More...</Link>
      </div>
    </div>
  )
}

export default BlogPostCard
