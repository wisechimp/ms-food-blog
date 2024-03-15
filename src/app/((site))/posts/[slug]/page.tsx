import { PortableText } from "@portabletext/react"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"

import { getBlogPost } from "@/sanity/sanity-utils"
import TagsBannerBox from "@/src/components/tagsBannerBox/TagsBannerBox"
import CustomPortableTextComponents from "@/src/components/customPortableTextComponents/CustomPortableTextComponents"
import FootnotesPortableText from "@/src/components/customPortableTextComponents/FootnotesPortableText"
import HeroImage from "@/src/components/heroImage/HeroImage"

import * as styles from "./postpage.module.css"

type PostPageProps = {
  params: {
    slug: string
  }
}

dayjs.extend(advancedFormat)

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = params
  const data = await getBlogPost(slug)
  const {
    title,
    author,
    body,
    publishedAt,
    mainImageAltText,
    mainImageSrc,
    mainImageAspectRatio,
    tags,
  } = data

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
          <PortableText
            value={body}
            components={CustomPortableTextComponents}
          />
          <FootnotesPortableText value={body} />
        </div>
        <div className={styles.blogpostTagBox}>
          <TagsBannerBox tags={tags} />
        </div>
      </div>
    </div>
  )
}

export default PostPage
