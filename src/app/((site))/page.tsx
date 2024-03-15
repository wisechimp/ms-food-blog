import Link from "next/link"

import { getBlogPosts } from "@/sanity/sanity-utils"
import BlogPostList from "@/src/components/blogpostlist/BlogPostList"
import HeroImage from "@/src/components/heroImage/HeroImage"
import LinkButton from "@/src/components/linkButton/LinkButton"

import * as styles from '@/src/components/blogpostlist/blogpostcard.module.css'

const Home = async () => {
  const latestBlogPosts = await getBlogPosts()
  const {
    title,
    slug,
    excerpt,
    mainImageSrc,
    mainImageAltText,
    mainImageAspectRatio,
  } = latestBlogPosts[0]

  return (
    <div>
      {/* Motto? - She who shares wins... */}
      <h1>{`Latest - ${title}`}</h1>
      <HeroImage
        imageSrc={mainImageSrc}
        imageAltText={mainImageAltText}
        imageAspectRatio={mainImageAspectRatio}
      />
      <div style={{ padding: "1em 1em 0" }}>
        <p>{excerpt}</p>
        <div className={styles.cardButton}>
          <LinkButton slug={slug} />
        </div>
      </div>
      <BlogPostList />
    </div>
  )
}

export default Home
