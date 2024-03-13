import Author from "./Author"
import Tag from "./Tag"

type BlogPost = {
  _id: string
  _createdAt: string
  title: string,
  author: Author,
  publishedAt: string
  slug: string
  excerpt: string
  mainImageSrc: string
  mainImageAltText: string
  tags: Array<Tag>
  body: any
}

export default BlogPost