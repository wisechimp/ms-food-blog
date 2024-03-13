import Link from "next/link"

const MenuLink = ({ to, linkText }) => (
    <Link href={`${to}`}>{linkText}</Link>
)

export default MenuLink