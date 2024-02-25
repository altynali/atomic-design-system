import React, { FC } from "react"
import { Text } from "../../atoms/Text"
import { classNames } from "../../utils"

export type HeaderProps = {
  className?: string
}

const Header: FC<HeaderProps> = (props) => {
  const { className = "" } = props

  return (
    <header className={classNames(className, ["atds-footer"])}>
      <Text>Logo</Text>
      <Text>Header</Text>
    </header>
  )
}

export default Header
