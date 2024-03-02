import { Sizes } from "atomic-design-system-foundation/lib/src"
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import { classNames } from "../../utils"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  hexCode?: string
  size?: string
} & PropsWithChildren

//TODO: complete primary etc
const Button: FC<ButtonProps> = (props) => {
  const {
    size = Sizes.base,
    hexCode,
    children,
    className = "",
    ...rest
  } = props

  return (
    <button
      style={{ backgroundColor: hexCode }}
      className={classNames(className, [
        "atds-button-container",
        `atds-button-${size}`,
      ])}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
