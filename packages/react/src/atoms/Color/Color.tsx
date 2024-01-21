import React, { FC } from "react"
import Spacing from "../../../../foundation/src/Spacing"
import { SpacingType } from "../../../../foundation/src/types"

export type ColorProps = {
  hexCode: string
  width?: SpacingType
  height?: SpacingType
}

const Color: FC<ColorProps> = (props) => {
  const { hexCode, height = Spacing.sm, width = Spacing.sm } = props

  const className = `atds-width-${width} atds-height-${height}`

  return <div style={{ backgroundColor: hexCode }} className={className}></div>
}

export default Color
