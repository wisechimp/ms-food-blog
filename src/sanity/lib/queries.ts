import { defineQuery } from "next-sanity";

export const getAllPosts =
  defineQuery(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      publishedAt,
      author,
      "mainImageSrc": mainImageData.mainImage.asset->url,
      "mainImageAltText": mainImageData.altText,
      "mainImageAspectRatio": mainImageData.mainImage.asset->metadata.dimensions.aspectRatio,
    }
  `);

export const getTaggedPosts =
  defineQuery(`*[_type == "post" && $slug in tags[]->slug.current] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      publishedAt,
      author,
      "mainImageSrc": mainImageData.mainImage.asset->url,
      "mainImageAltText": mainImageData.altText,
      "mainImageAspectRatio": mainImageData.mainImage.asset->metadata.dimensions.aspectRatio,
    }`);

export const getPost =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _rawBody,
      title,
      excerpt,
      "slug": slug.current,
      publishedAt,
      author->{name},
      tags[]->{_id, title, "slug": slug.current},
      "mainImageSrc": mainImageData.mainImage.asset->url,
      "mainImageAltText": mainImageData.altText,
      "mainImageAspectRatio": mainImageData.mainImage.asset->metadata.dimensions.aspectRatio,
      body[]
    }`);

export const getAuthor = defineQuery(`*[_type == "author"][0]{
      _id,
      _createdAt,
      name,
      bio,
      "image": mainImage.asset->url,
      "imageAltText": mainImage.altText
    }`);

export const getTag =
  defineQuery(`*[_type == "tag" && slug.current == $slug][0]{
      _id,
      title,
      description
    }
  `);
