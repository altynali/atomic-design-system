import React, { FC } from "react"
import { Text } from "../../atoms/Text"

export type HeaderProps = {
  className?: string
}

const Header: FC<HeaderProps> = (props) => {
  const {} = props
  return (
    <header className="atds-header">
      <Text>Logo</Text>
      <Text>Header</Text>
    </header>
  )
}

export default Header
