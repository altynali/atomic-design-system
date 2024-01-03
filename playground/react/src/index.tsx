import { Color } from "atomic-design-system-react"
import "atomic-design-system-scss/lib/Utilities.css"
import { render } from "react-dom"
import React from "react"

// TODO: ReactElement key type
const container = document.getElementById("root")

if (container) {
  const element: any = (
    <div style={{ padding: "40px" }}>
      <Color hexCode="#000" />
    </div>
  )

  render(element, container)
}
