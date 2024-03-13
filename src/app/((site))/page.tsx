import Image from 'next/image'
import { getBlogPosts } from "@/sanity/sanity-utils"
import BlogPostList from '@/src/components/blogpostlist/BlogPostList'
import Link from 'next/link'

import * as styles from './home.module.css'

const Home = async () => {
  const latestBlogPosts = await getBlogPosts()
  const { title, slug, excerpt, mainImageSrc, mainImageAltText } = latestBlogPosts[0]

  return (
    <div>
      Motto? - She who shares wins...
      <h2>{`Latest - ${title}`}</h2>
      <div className={styles.heroImage}>
        <Image
          src={mainImageSrc}
          alt={mainImageAltText}
          width={800}
          height={600}
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