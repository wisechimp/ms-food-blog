import BlogPost from "@/types/BlogPost";
import clientConfig from "./config/client-config";
import { groq } from "next-sanity";


const getBlogPosts = async (): Promise<BlogPost[]> => {
  return clientConfig.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      excerpt,
      "slug": slug.current,
      publishedAt,
      author,
      "mainImageSrc": mainImageData.mainImage.asset->url,
      "mainImageAltText": mainImageData.altText,
    }`
  )
}

export { getBlogPosts }