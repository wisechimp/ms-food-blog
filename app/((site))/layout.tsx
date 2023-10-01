import Menu from '@/app/components/menu/Menu'
import menulinks from '@/data/menulinks'
import { ReactElement } from 'react'

interface LayoutProps {
  children: ReactElement
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
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