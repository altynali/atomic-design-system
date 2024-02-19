import { Spacing } from "atomic-design-system-foundation"
import { SpacingType } from "atomic-design-system-foundation/src/types"
import React, { FC, useState } from "react"

export type CheckboxProps = {
  hexCode?: string
  width?: SpacingType
  height?: SpacingType
  name?: string
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const { hexCode, height = Spacing.md, width = Spacing.md } = props
  const [checked, setChecked] = useState<boolean>(true)
  const className = `atds-width-${width} atds-height-${height}`

  return (
    // <label
    //   // htmlFor={name}
    //   className="container"
    //   style={{ display: "flex", alignItems: "center" }}
    // >
    <input
      // id={name}
      type="checkbox"
      style={{ backgroundColor: hexCode }}
      className={"input " + className}
      defaultChecked={checked}
      onChange={() => setChecked(!checked)}
    />
    // <span className={"checkmark " + className}></span>
    // </label>
  )
}

export default Checkbox
