import React, { FC, PropsWithChildren } from "react"
import { FontSizeType } from "../../../../foundation/src/types"
import FontSize from "../../../../foundation/src/FontSize"

export type TextProps = {
  size?: FontSizeType
} & PropsWithChildren

const Text: FC<TextProps> = (props) => {
  const { size = FontSize.base, children } = props

  const className = `atds-text atds-text-${size}`

  return <p className={className}>{children}</p>
}

export default Text
