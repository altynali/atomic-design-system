import React, { FC, PropsWithChildren } from "react"
import { SizesType } from "../../../../foundation/src/types"
import { Sizes } from "atomic-design-system-foundation"

export type TextProps = {
  size?: SizesType
} & PropsWithChildren

const Text: FC<TextProps> = (props) => {
  const { size = Sizes.base, children } = props

  const className = `atds-text atds-text-${size}`

  return <p className={className}>{children}</p>
}

export default Text
