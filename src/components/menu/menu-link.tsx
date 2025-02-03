import Link from "next/link";

type MenuLinkProps = {
  to: string;
  linkText: string;
};

const MenuLink = ({ to, linkText }: MenuLinkProps) => (
  <Link href={`${to}`}>{linkText}</Link>
);

export default MenuLink;
