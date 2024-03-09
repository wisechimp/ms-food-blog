import { ReactElement } from "react"

import Menu from "@/src/components/menu/Menu"
import { headersAndMenusFont } from "@/src/utils/fonts"
import "@/src/styles/global.css"

interface LayoutProps {
  children: ReactElement
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en' className={headersAndMenusFont.variable}>
      <body>
        <main>
          <Menu />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout