import React, { FC } from "react"
// import { Spacing } from "atomic-design-system-foundation/lib/src"
import { classNames } from "../../utils"

export type ColorProps = {
  className?: string
  hexCode: string
  width?: string
  height?: string
}

const Color: FC<ColorProps> = (props) => {
  const { hexCode, height, width, className = "" } = props

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
