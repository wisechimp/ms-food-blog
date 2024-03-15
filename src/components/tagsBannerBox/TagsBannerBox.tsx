import Link from "next/link"
import Tag from "../../types/Tag"
import * as styles from "./tagsBannerBox.module.css"
import { Chip } from "@nextui-org/chip"

type SummaryContentBannerProps = {
  tags: Array<Tag>
}

const SummaryContentBanner = ({ tags }: SummaryContentBannerProps) => {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => {
        const {id, title} = tag
        return (
          <div key={id}>
            <Link href={`/tags/${title.replace(/ /g, "-")}`}>
              <Chip color="primary" variant="shadow">{title}</Chip>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default SummaryContentBanner
