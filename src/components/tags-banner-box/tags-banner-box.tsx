import Link from "next/link";

import { Chip } from "@heroui/react";

import * as styles from "./tagsBannerBox.module.css";

type TagBannerData = {
  _id: string;
  title: string | null;
  slug: string | null;
};

type SummaryContentBannerProps = {
  tags: TagBannerData[];
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
