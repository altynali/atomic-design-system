import React from "react"
import Color from "./Color"
import "atomic-design-system-scss/lib/Utilities.css"
import { Spacing } from "atomic-design-system-foundation/lib/src"

export default {
  title: "Atoms|Color",
}

export const Common = () => <Color hexCode="#000" />

export const CustomDimensions = () => (
  <Color hexCode="#000" width={Spacing.lg} height={Spacing.lg} />
)
