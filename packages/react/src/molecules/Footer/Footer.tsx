import React, { FC } from "react"
import { Text } from "../../atoms/Text"
import { classNames } from "../../utils"

export type FooterProps = {
  className?: string
}

const Footer: FC<FooterProps> = (props) => {
  const { className = "" } = props
  return (
    <footer className={classNames(className, ["atds-footer"])}>
      <Text>Footer</Text>
      <Text>2024</Text>
    </footer>
  )
}

export default Footer
