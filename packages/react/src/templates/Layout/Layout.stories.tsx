import React from "react"
import Layout from "./Layout"
import "atomic-design-system-scss/lib/Form.css"
import "atomic-design-system-scss/lib/Button.css"
import "atomic-design-system-scss/lib/Input.css"
import "atomic-design-system-scss/lib/Select.css"
import "atomic-design-system-scss/lib/Margin.css"
import "atomic-design-system-scss/lib/Padding.css"
import "atomic-design-system-scss/lib/Layout.css"
import { Form } from "../../organisms/Form"
import { Input } from "../../molecules/Input"
import { Select } from "../../molecules/Select"
import { Padding } from "../../atoms/Padding"
import { Spacing } from "atomic-design-system-foundation/lib/src"

export default {
  title: "Templates|Layout",
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
  <Layout>
    <Form label="Form Label">
      <Padding bottom space={Spacing.sm}>
        <Input />
      </Padding>
      <Padding bottom space={Spacing.sm}>
        <Select options={options} />
      </Padding>
    </Form>
  </Layout>
)
