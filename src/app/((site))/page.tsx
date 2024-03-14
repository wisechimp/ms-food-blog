import Link from "next/link"

import { getBlogPosts } from "@/sanity/sanity-utils"
import BlogPostList from "@/src/components/blogpostlist/BlogPostList"
import HeroImage from "@/src/components/heroImage/HeroImage"

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

  console.log(mainImageSrc)

  return (
    <div>
      {/* Motto? - She who shares wins... */}
      <h2>{`Latest - ${title}`}</h2>
      <HeroImage
        imageSrc={mainImageSrc}
        imageAltText={mainImageAltText}
        imageAspectRatio={mainImageAspectRatio}
      />
      <p>{excerpt}</p>
      <Link href={`/posts/${slug}`}>Read More...</Link>
      <BlogPostList />
    </div>
  )
}

export default Home
