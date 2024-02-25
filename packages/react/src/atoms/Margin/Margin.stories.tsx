import React from "react"
import Margin from "./Margin"
import "atomic-design-system-scss/lib/Margin.css"
import { Color } from "../Color"

export default {
  title: "Atoms|Margin",
}

export const CommonMarginExample = () => (
  <Margin>
    <Color hexCode="#000" />
  </Margin>
)
