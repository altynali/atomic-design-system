import React, { FC } from "react"
import { Spacing } from "atomic-design-system-foundation"
import { SpacingType } from "../../../../foundation/src/types"
import { classNames } from "../../utils"

export type ColorProps = {
  className?: string
  hexCode: string
  width?: SpacingType
  height?: SpacingType
}

const Color: FC<ColorProps> = (props) => {
  const {
    hexCode,
    height = Spacing.sm,
    width = Spacing.sm,
    className = "",
  } = props

  return (
    <div
      style={{ backgroundColor: hexCode }}
      className={classNames(className, [
        `atds-width-${width}`,
        `atds-height-${height}`,
      ])}
    ></div>
  )
}

export default Color
