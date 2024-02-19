import React from "react"
import Select from "./Select"
import "atomic-design-system-scss/lib/Select.css"
import "atomic-design-system-scss/lib/Text.css"

const options = [
  {
    label: "Strict Black",
    value: "black",
  },
  {
    label: "Heavenly Green",
    value: "green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
]

export default {
  title: "Molecules|Select",
}

export const Common = () => <Select options={options} />

export const RenderOption = () => (
  <Select
    options={options}
    renderOption={({ getOptionRecommendedProps, option, isSelected }) => (
      <span {...getOptionRecommendedProps()}>
        {option.label} {isSelected ? "SELECTED !" : ""}
      </span>
    )}
  />
)

export const CustomLabel = () => (
  <Select label="Select a color" options={options} />
)
