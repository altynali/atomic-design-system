import { Color, Text } from "atomic-design-system-react"
import "atomic-design-system-scss/lib/Utilities.css"
import "atomic-design-system-scss/lib/Text.css"
import { render } from "react-dom"
import React from "react"

// TODO: ReactElement key type
const container = document.getElementById("root")

if (container) {
  const element: any = (
    <div style={{ padding: "40px" }}>
      <Color hexCode="#000" />
      <Text size="xl">ekjnfdj</Text>
    </div>
  )

  render(element, container)
}
