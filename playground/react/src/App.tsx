import React from "react"
import {
  Color,
  Select,
  Text,
  Button,
  Padding,
} from "atomic-design-system-react"
import "atomic-design-system-scss/lib/Utilities.css"
import "atomic-design-system-scss/lib/Text.css"
import "atomic-design-system-scss/lib/Select.css"
import "atomic-design-system-scss/lib/Button.css"
import "atomic-design-system-scss/lib/Padding.css"
import { Spacing } from "atomic-design-system-foundation"

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
]

export default function App() {
  return (
    <div>
      <Color hexCode="#000" />
      <Text size="xl">ekjnfdj</Text>
      <Button>ekjnfdj</Button>
      <Padding spacing={Spacing.xxxs}>
        <Select
          options={options}
          // renderOption={({ option, getOptionRecommendedProps }) => (
          //   <p {...getOptionRecommendedProps()}>
          //     {option.label + "AAAAAAAA" + option.value}
          //   </p>
          // )}
        ></Select>
      </Padding>
    </div>
  )
}
