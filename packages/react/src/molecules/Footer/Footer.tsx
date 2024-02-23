import React, { FC } from "react"
import { Text } from "../../atoms/Text"

export type FooterProps = {
  className?: string
}

const Footer: FC<FooterProps> = (props) => {
  const {} = props
  return (
    <div className="atds-footer">
      <Text>Footer</Text>
      <Text>Header</Text>
    </div>
  )
}

export default Footer
