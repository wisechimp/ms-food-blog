import { ReactElement } from "react";

import Menu from "@/src/components/menu/Menu";
import { SanityLive } from "@/src/sanity/lib/live";
import { headersAndMenusFont } from "@/src/utils/fonts";

import Providers from "../providers";

interface LayoutProps {
  children: ReactElement;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className={`light ${headersAndMenusFont.variable}`}>
      <body>
        <Providers>
          <main>
            <Menu />
            {children}
            <SanityLive />
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
