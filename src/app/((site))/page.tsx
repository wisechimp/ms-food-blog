import Image from 'next/image'
import { getBlogPosts } from "@/sanity/sanity-utils"
import BlogPostList from '@/src/components/blogpostlist/BlogPostList'
import Link from 'next/link'

import * as styles from './home.module.css'

const Home = async () => {
  const latestBlogPosts = await getBlogPosts()
  const { title, slug, excerpt, mainImageSrc, mainImageAltText, mainImageAspectRatio } = latestBlogPosts[0]
  const imageHeight = 600
  let imageWidth = imageHeight * mainImageAspectRatio

  return (
    <div>
      Motto? - She who shares wins...
      <h2>{`Latest - ${title}`}</h2>
      <div className={styles.heroImage}>
        <Image
          src={mainImageSrc}
          alt={mainImageAltText}
          width={imageWidth}
          height={imageHeight}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: imageHeight,
            maxWidth: imageWidth
          }}
          priority
        />
      </div>
      <p>{excerpt}</p>
      <Link href={`/posts/${slug}`}>Read More...</Link>
      <BlogPostList />
    </div>
  )
}

export default Home