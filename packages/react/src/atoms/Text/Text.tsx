import React, { FC, PropsWithChildren } from "react"
import { SizesType } from "../../../../foundation/src/types"
import { Sizes } from "atomic-design-system-foundation"

export type TextProps = {
  className?: string
  size?: SizesType
} & PropsWithChildren

const Text: FC<TextProps> = (props) => {
  const { size = Sizes.base, children, className } = props

  const cls = className + ` atds-text atds-text-${size}`

  return <p className={cls}>{children}</p>
}

export default Text
