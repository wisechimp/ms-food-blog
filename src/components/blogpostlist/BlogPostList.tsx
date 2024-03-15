import HeroImage from "../heroImage/HeroImage"
import LinkButton from "../linkButton/LinkButton"
import BlogPostCard from "./BlogPostCard"
import BlogPost from "@/src/types/BlogPost"

import * as styles from './blogpostcard.module.css'

type BlogPostListProps = {
  fetchData: () => Promise<BlogPost[]>
}

const BlogPostList = async ({ fetchData }: BlogPostListProps) => {
  const blogPosts = await fetchData()
  const { title, mainImageSrc, mainImageAltText, mainImageAspectRatio, excerpt, slug } = blogPosts[0]

  const renderedPosts = blogPosts.map((blogPost, i) => {
    if (i === 0) {
      return
    } else {
    return (
      <div key={blogPost._id}>
        <BlogPostCard data={blogPost} />
      </div>
    )
    }
  })

  return (
    <div>
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
      {renderedPosts}
    </div>
  )
}

export default BlogPostList