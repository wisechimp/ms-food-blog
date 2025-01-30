import { Button } from "@heroui/button"
import { Link } from '@heroui/link'

type LinkButtonProps = {
  slug: string
}

const LinkButton = ({slug}: LinkButtonProps) => {
  const compoundSlug = `/posts/${slug}`
  return(
    <Button href={compoundSlug} as={Link} color="primary" variant="solid" className="text-lg mt-2">
      Read More...
    </Button>
  )
}

export default LinkButton