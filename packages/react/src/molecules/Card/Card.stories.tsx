import React from "react"
import Card from "./Card"
import "atomic-design-system-scss/lib/Card.css"

export default {
  title: "Atoms|Card",
}

export const Common = () => (
  <Card id={1} label="Label" description="Description" />
)

export const CustomDimensions = () => (
  <Card
    id={1}
    label="Label"
    description="Description"
    width={200}
    height={200}
  />
)
