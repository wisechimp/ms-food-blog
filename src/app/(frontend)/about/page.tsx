import { PortableText } from "@portabletext/react";

import { getAuthor } from "@/src/sanity/sanity-utils";

const About = async () => {
  const authorData = await getAuthor();
  const { bio } = authorData;

  return (
    <div>
      <h1>About</h1>
      <PortableText value={bio} />
    </div>
  );
};

export default About;
