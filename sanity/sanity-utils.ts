import BlogPost from "@/types/BlogPost";
import clientConfig from "./config/client-config";
import { groq } from "next-sanity";
import Author from "@/types/Author";


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

const getAuthor = async (): Promise<Author> => {
  return clientConfig.fetch(
    groq`*[_type == "author"][0]{
      _id,
      _createdAt,
      name,
      bio,
      "image": mainImage.asset->url,
      "imageAltText": mainImage.altText
    }`
  )
}

export { getBlogPosts, getAuthor }