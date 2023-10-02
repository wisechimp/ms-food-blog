import { ReactElement } from "react"

import Menu from "@/app/components/menu/Menu"
import menulinks from "@/data/menulinks"
import { headersAndMenusFont } from "@/utils/fonts"

import '@/styles/global.css'

interface LayoutProps {
  children: ReactElement
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en' className={headersAndMenusFont.variable}>
      <body>
        <main>
          <Menu menuLinks={menulinks} />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout