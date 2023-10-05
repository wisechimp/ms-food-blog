import Image from 'next/image'

import { getBlogPosts } from "@/sanity/sanity-utils"

const Home = async () => {
  const latestBlogPosts = await getBlogPosts()
  console.log(latestBlogPosts)
  const { title, publishedAt, slug, excerpt, mainImageSrc, mainImageAltText } = latestBlogPosts[0]

  return (
    <div>
      Motto? - She who shares wins...
      <h2>{`Latest - ${title}`}</h2>
      <Image
        src={mainImageSrc}
        alt={mainImageAltText}
        width={800}
        height={600}
      />
      <p>{excerpt}</p>
    </div>
  )
}

export default Home