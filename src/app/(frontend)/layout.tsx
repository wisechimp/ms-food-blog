import { ReactElement } from "react";

import Menu from "@/src/components/menu/Menu";
import { SanityLive } from "@/src/sanity/lib/live";
import { headersAndMenusFont } from "@/src/utils/fonts";

import "../global.css";
import Providers from "../providers";

interface LayoutProps {
  children: ReactElement;
}

const FrontendLayout = ({ children }: LayoutProps) => {
  return (
    <div lang="en" className={`${headersAndMenusFont.variable}`}>
      <Providers>
        <main>
          <Menu />
          {children}
          <SanityLive />
        </main>
      </Providers>
    </div>
  );
};

export default FrontendLayout;
