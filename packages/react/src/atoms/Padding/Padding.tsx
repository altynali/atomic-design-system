import React, { FC, PropsWithChildren } from "react"
import Spacing from "atomic-design-system-foundation/src/Spacing"
// import Spacing from 'atomic-design-system-foundation'

export type PaddingProps = {
  space?: keyof typeof Spacing
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
} & PropsWithChildren

const Padding: FC<PaddingProps> = ({
  space = "xxxs",
  children,
  left,
  right,
  top,
  bottom,
}) => {
  let className = ``

  if (!left && !right && !top && !bottom) {
    className = `atds-padding-${space}`
  }

  if (left) {
    className = `${className} atds-padding-left-${space}`
  }

  if (right) {
    className = `${className} atds-padding-right-${space}`
  }

  if (top) {
    className = `${className} atds-padding-top-${space}`
  }

  if (bottom) {
    className = `${className} atds-padding-bottom-${space}`
  }

  return <div className={className}>{children}</div>
}

export default Padding
