import React, { FC } from "react"
import { Text } from "../../atoms/Text"
import { classNames } from "../../utils"

export type FooterProps = {
  className?: string
  leftText?: string
  rightText?: string
}

const Footer: FC<FooterProps> = (props) => {
  const { className = "", leftText = "Footer", rightText = "2024" } = props
  return (
    <footer className={classNames(className, ["atds-footer"])}>
      <Text>{leftText}</Text>
      <Text>{rightText}</Text>
    </footer>
  )
}

export default Footer
