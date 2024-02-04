import React, { FC, PropsWithChildren } from "react"
import Spacing from "../../../../foundation/src/Spacing"
// import Spacing from 'atomic-design-system-foundation'

export type MarginProps = {
  space?: keyof typeof Spacing
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
} & PropsWithChildren

const Margin: FC<MarginProps> = ({
  space = "xxxs",
  children,
  left,
  right,
  top,
  bottom,
}) => {
  let className = ``

  if (!left && !right && !top && !bottom) {
    className = `atds-margin-${space}`
  }

  if (left) {
    className = `${className} atds-margin-left-${space}`
  }

  if (right) {
    className = `${className} atds-margin-right-${space}`
  }

  if (top) {
    className = `${className} atds-margin-top-${space}`
  }

  if (bottom) {
    className = `${className} atds-margin-bottom-${space}`
  }

  return <div className={className}>{children}</div>
}

export default Margin
