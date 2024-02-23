import { Sizes } from "atomic-design-system-foundation"
import { SizesType } from "atomic-design-system-foundation/src/types"
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  hexCode?: string
  size?: SizesType
} & PropsWithChildren

//TODO: complete primary etc
const Button: FC<ButtonProps> = (props) => {
  const { size = Sizes.base, hexCode, children, ...rest } = props

  const className = `atds-button-container atds-button-${size}`

  return (
    <button
      style={{ backgroundColor: hexCode }}
      className={className}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
