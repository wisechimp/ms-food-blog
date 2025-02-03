import { ReactElement } from "react";

import Menu from "@/src/components/menu/menu";
import { SanityLive } from "@/src/sanity/lib/live";
import { headersAndMenusFont } from "@/src/utils/fonts";

import "../global.css";
import Providers from "../providers";

interface LayoutProps {
  children: ReactElement;
}

const FrontendLayout = ({ children }: LayoutProps) => {
  return (
    <div
      lang="en"
      className={`${headersAndMenusFont.variable} max-w-5xl`}
      style={{ margin: "0 auto" }}
    >
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
