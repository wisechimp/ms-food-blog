import BlogPost from "@/src/types/BlogPost";
import clientConfig from "./config/client-config";
import { groq } from "next-sanity";
import Author from "@/src/types/Author";
import Tag from "@/src/types/Tag";


const getBlogPosts = async (): Promise<BlogPost[]> => {
  return clientConfig.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      publishedAt,
      author,
      "mainImageSrc": mainImageData.mainImage.asset->url,
      "mainImageAltText": mainImageData.altText,
      "mainImageAspectRatio": mainImageData.mainImage.asset->metadata.dimensions.aspectRatio,
    }`
  )
}

const getTaggedBlogPosts = async (slug: string): Promise<BlogPost[]> => {
  return clientConfig.fetch(
    groq`*[_type == "post" && count(tags[@->title in [$slug]]) > 0] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      publishedAt,
      author,
      "mainImageSrc": mainImageData.mainImage.asset->url,
      "mainImageAltText": mainImageData.altText,
      "mainImageAspectRatio": mainImageData.mainImage.asset->metadata.dimensions.aspectRatio,
      tags[]->{title, description}
    }
    `,
    { slug: slug }
  )
} 

const getBlogPost = async (slug: string): Promise<BlogPost> => {
  return clientConfig.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _rawBody,
      title,
      excerpt,
      "slug": slug.current,
      publishedAt,
      author->{name},
      tags[]->{_id, title},
      "mainImageSrc": mainImageData.mainImage.asset->url,
      "mainImageAltText": mainImageData.altText,
      "mainImageAspectRatio": mainImageData.mainImage.asset->metadata.dimensions.aspectRatio,
      body[]
    }`,
    { slug: slug }
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

const getTag = async (slug: string): Promise<Tag> => {
  return clientConfig.fetch(
    groq`*[_type == "tag" && title == $slug][0]{
      _id,
      title,
      description
    }`,
    { slug: slug }
  )
}

export { getAuthor, getBlogPost, getBlogPosts, getTaggedBlogPosts, getTag }