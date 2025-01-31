import { PortableText } from "@portabletext/react";

import { sanityFetch } from "@/src/sanity/lib/live";
import { getAuthor } from "@/src/sanity/lib/queries";

const About = async () => {
  const { data: author } = await sanityFetch({
    query: getAuthor,
  });
  const { bio } = author;

  return (
    <div>
      <h1>About</h1>
      <PortableText value={bio} />
    </div>
  );
};

export default About;
