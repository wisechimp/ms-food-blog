import React from "react"
import Image from "next/image"

import * as styles from "./blogpostcard.module.css"
import BlogPost from "@/src/types/BlogPost"
import Link from "next/link"
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'

type BlogPostCardProps = {
  data: BlogPost
}

dayjs.extend(relativeTime)

const BlogPostCard = ({
  data
}: BlogPostCardProps) => {
  const { title, publishedAt, excerpt, slug, mainImageSrc, mainImageAltText } = data
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardText}>
          <p>
            Written by Ma Sharp {dayjs(publishedAt).fromNow()}
          </p>
          <p>{excerpt}</p>
        </div>
        <div className={styles.cardThumb}>
          <Image src={mainImageSrc} alt={mainImageAltText} width={110} height={80} />
        </div>
      </div>
      <div className={styles.cardButton}>
        <Link href={`/posts/${slug}`}>Read More...</Link>
      </div>
    </div>
  )
}

export default BlogPostCard
