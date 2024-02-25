import React from "react"
import Form from "./Form"
import "atomic-design-system-scss/lib/Form.css"
import "atomic-design-system-scss/lib/Button.css"
import "atomic-design-system-scss/lib/Input.css"
import "atomic-design-system-scss/lib/Select.css"
import "atomic-design-system-scss/lib/Margin.css"
import "atomic-design-system-scss/lib/Padding.css"
import { Input } from "../../molecules/Input"
import { Select } from "../../molecules/Select"
import { Padding } from "../../atoms/Padding"
import { Spacing } from "atomic-design-system-foundation/lib/src"

export default {
  title: "Organisms|Form",
}

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

export const Common = () => (
  <Form label="Form Label">
    <Padding bottom space={Spacing.sm}>
      <Input />
    </Padding>
    <Padding bottom space={Spacing.sm}>
      <Select options={options} />
    </Padding>
  </Form>
)
