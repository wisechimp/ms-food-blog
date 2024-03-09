import { PortableTextBlock } from "sanity"

type Author = {
  _id: string,
  _createdAt: Date,
  name: string,
  slug: string,
  imageSrc: string,
  imageAltText: string,
  bio: PortableTextBlock[]
}

export default Author