import Tag from "./Tag"

type BlogPost = {
  _id: string
  _createdAt: string
  title: string
  publishedAt: string
  slug: string
  excerpt: string
  mainImageSrc: string
  mainImageAltText: string
  tags: Array<Tag>
}

export default BlogPost