import React, { FC } from "react"
import { Text } from "../../atoms/Text"
import { classNames } from "../../utils"

export type HeaderProps = {
  className?: string
  leftText?: string
  rightText?: string
}

const Header: FC<HeaderProps> = (props) => {
  const { className = "", leftText = "Logo", rightText = "Header" } = props

  return (
    <header className={classNames(className, ["atds-header"])}>
      <Text>{leftText}</Text>
      <Text>{rightText}</Text>
    </header>
  )
}

export default Header
