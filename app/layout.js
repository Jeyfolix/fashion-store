import './globals.css'

export const metadata = {
  title: 'Fashion Store - Clothes, Shoes & Beauty',
  description: 'Your one-stop shop for fashion and beauty services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
