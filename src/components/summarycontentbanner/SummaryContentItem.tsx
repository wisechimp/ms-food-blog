import Link from "next/link"
import * as styles from "./summarycontentitem.module.css"

type SummaryContentItemProps = {
  tagTitle: string
}

const SummaryContentItem = ({ tagTitle }: SummaryContentItemProps ) => (
  <div className={styles.tagStyle}>
    <Link href={`/tags/${tagTitle.replace(/ /g, "-")}`}>{tagTitle}</Link>
  </div>
)

export default SummaryContentItem
