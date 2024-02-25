import { Spacing } from "atomic-design-system-foundation"
import { SpacingType } from "atomic-design-system-foundation/src/types"
import React, { FC, useState } from "react"
import { classNames } from "../../utils"

export type CheckboxProps = {
  className?: string
  hexCode?: string
  width?: SpacingType
  height?: SpacingType
  name?: string
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    hexCode,
    height = Spacing.md,
    width = Spacing.md,
    className = "",
  } = props
  const [checked, setChecked] = useState<boolean>(false)

  return (
    // <label
    //   // htmlFor={name}
    //   className="container"
    //   style={{ display: "flex", alignItems: "center" }}
    // >
    <input
      // id={name}
      type="checkbox"
      data-testid="AtdsCheckbox"
      style={{ backgroundColor: hexCode }}
      className={classNames(className, [
        "atds-checkbox-input",
        `atds-width-${width}`,
        `atds-height-${height}`,
      ])}
      defaultChecked={checked}
      onChange={() => setChecked(!checked)}
    />
    // <span className={"checkmark " + className}></span>
    // </label>
  )
}

export default Checkbox
