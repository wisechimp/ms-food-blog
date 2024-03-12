import SummaryContentItem from "./SummaryContentItem"
import Tag from "../../types/Tag"
import * as styles from "./summarycontentbanner.module.css"

type SummaryContentBannerProps = {
  tags: Array<Tag>
}

const SummaryContentBanner = ({ tags }: SummaryContentBannerProps) => {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag, i) => {
        return <SummaryContentItem key={i} tagTitle={tag.title} />
      })}
    </div>
  )
}

export default SummaryContentBanner
