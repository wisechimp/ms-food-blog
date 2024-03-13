import { getBlogPost } from "@/sanity/sanity-utils"

import * as styles from './postpage.module.css'
import dayjs from "dayjs"
import advancedFormat from 'dayjs/plugin/advancedFormat'
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import SummaryContentBanner from "@/src/components/summarycontentbanner/SummaryContentBanner"
import CustomPortableTextComponents from "@/src/components/customPortableTextComponents/CustomPortableTextComponents"
import FootnotesPortableText from "@/src/components/customPortableTextComponents/FootnotesPortableText"

type PostPageProps = {
  params: {
    slug: string
  }
}

dayjs.extend(advancedFormat)

const PostPage = async ({params}: PostPageProps) => {
  const { slug } = params
  const data = await getBlogPost(slug)
  const { title, author, body, publishedAt, mainImageAltText, mainImageSrc, mainImageAspectRatio, tags } = data
  const imageHeight = 600
  let imageWidth = imageHeight * mainImageAspectRatio

  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.blogpostMetadata}>
        <p>Author: {author.name}</p>
        <p>Posted on: {dayjs(publishedAt).format("Do MMMM YYYY")}</p>
      </div>
      <div className={styles.blogpostImage}>
        <Image
          src={mainImageSrc}
          alt={mainImageAltText}
          width={imageWidth}
          height={imageHeight}
          priority
        />
      </div>
      <div className={styles.blogpostBody}>
        <div className={styles.blogpostText}>
          <PortableText
            value={body}
            components={CustomPortableTextComponents}
          />
          <FootnotesPortableText value={body} />
        </div>
        <div className={styles.blogpostTagBox}>
          <SummaryContentBanner tags={tags} />
        </div>
      </div>
    </div>
  )
}

export default PostPage