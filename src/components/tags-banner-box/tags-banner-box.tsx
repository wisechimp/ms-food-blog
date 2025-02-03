import Link from "next/link";

import { Chip } from "@heroui/react";

import { Tag } from "@/src/sanity/types";

import * as styles from "./tagsBannerBox.module.css";

type SummaryContentBannerProps = {
  tags: Array<Tag>;
};

const SummaryContentBanner = ({ tags }: SummaryContentBannerProps) => {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => {
        const { _id, title, slug } = tag;
        return (
          <div key={_id}>
            <Link href={`/tags/${slug}`}>
              <Chip color="primary" variant="shadow">
                {title}
              </Chip>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryContentBanner;
