import React, { FC, PropsWithChildren, Suspense } from "react"
import { Header } from "../../molecules/Header"
import { Footer } from "../../molecules/Footer"
import { classNames } from "../../utils"
import { Text } from "../../atoms/Text"

export type LayoutProps = {
  className?: string
  noHeader?: boolean
  noFooter?: boolean
  label?: string
} & PropsWithChildren

const Layout: FC<LayoutProps> = (props) => {
  const {
    children,
    noHeader = false,
    noFooter = false,
    label = "Todo App",
    className = "",
  } = props

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <div className={classNames(className, ["atds-layout"])}>
        {!noHeader && <Header leftText="Logo" rightText="Header" />}
        <div className="atds-layout__content">
          <main>
            <h1>{label}</h1>
            {children}
          </main>
        </div>
        {!noFooter && <Footer leftText="Footer" rightText="2024" />}
      </div>
    </Suspense>
  )
}

export default Layout
