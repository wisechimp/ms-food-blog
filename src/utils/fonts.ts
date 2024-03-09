import { Courgette } from 'next/font/google'

const headersAndMenusFont = Courgette({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headers-and-menus'
})

export { headersAndMenusFont }