import React, { FC, PropsWithChildren } from "react"
import { Header } from "../../molecules/Header"
import { Footer } from "../../molecules/Footer"

export type LayoutProps = {
  className?: string
  noHeader?: boolean
  noFooter?: boolean
} & PropsWithChildren
// TODO: add className to components

const Layout: FC<LayoutProps> = (props) => {
  const { children, noHeader = false, noFooter = false } = props

  return (
    <div className="atds-layout">
      {!noHeader && <Header />}
      <div className="atds-layout__content">{children}</div>
      {!noFooter && <Footer />}
    </div>
  )
}

export default Layout
