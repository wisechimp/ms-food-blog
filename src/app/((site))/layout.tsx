import { ReactElement } from "react"

import Menu from "@/src/components/menu/Menu"
import { headersAndMenusFont } from "@/src/utils/fonts"
import "@/src/styles/global.css"
import Providers from "../providers"

interface LayoutProps {
  children: ReactElement
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en' className={`light ${headersAndMenusFont.variable}`}>
      <body>
        <Providers>
          <main>
            <Menu />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout