import { redirect } from "next/navigation";

import { PortableText } from "@portabletext/react";

import components from "@/src/components/custom-portable-text-components/custom-portable-text-components";
import { sanityFetch } from "@/src/sanity/lib/live";
import { getAuthor } from "@/src/sanity/lib/queries";

const About = async () => {
  const { data: author } = await sanityFetch({
    query: getAuthor,
  });

  if (!author) {
    return redirect("/404");
  }

  const { bio } = author;

  return (
    <div>
      <h1>About</h1>
      {bio && <PortableText value={bio} components={components} />}
    </div>
  );
};

export default About;
