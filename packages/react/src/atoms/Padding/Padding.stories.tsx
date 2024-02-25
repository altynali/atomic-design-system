import React from "react"
import Padding from "./Padding"
import "atomic-design-system-scss/lib/Padding.css"
import { Color } from "../Color"

export default {
  title: "Atoms|Padding",
}

export const CommonPaddingExample = () => (
  <Padding>
    <Color hexCode="#000" />
  </Padding>
)
