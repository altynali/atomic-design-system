import { Sizes } from "atomic-design-system-foundation"
import { SizesType } from "atomic-design-system-foundation/src/types"
import React, { FC, PropsWithChildren } from "react"

export type ColorProps = {
  hexCode: string
  size?: SizesType
} & PropsWithChildren

const Button: FC<ColorProps> = (props) => {
  const { size = Sizes.base, hexCode, children } = props

  const className = `atds-button-container atds-button-${size}`

  return (
    <button style={{ backgroundColor: hexCode }} className={className}>
      {children}
    </button>
  )
}

export default Button
