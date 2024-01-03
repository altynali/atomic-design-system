import React, { FC } from "react"
import Spacing from "../../foundation/Spacing"

export interface ColorProps {
  hexCode: string
  width?: keyof typeof Spacing
  height?: keyof typeof Spacing
}

const Color: FC<ColorProps> = (props) => {
  const { hexCode, height = Spacing.sm, width = Spacing.sm } = props

  const cls = `atds-width-${width} atds-height-${height}`

  return <div style={{ backgroundColor: hexCode }} className={cls}></div>
}

export default Color
