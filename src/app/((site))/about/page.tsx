import { getAuthor } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

const About = async () => {
  const authorData = await getAuthor()
  const { bio } = authorData

  return (
    <div>
      <h1>About</h1>
      <PortableText value={bio} />
    </div>
  )
}

export default About