import React from "react"
import { render } from "@testing-library/react"
import Text from "./Text"
import { Sizes } from "atomic-design-system-foundation/lib/src"
import "@testing-library/jest-dom"

describe("Text component", () => {
  it("renders with default size", () => {
    const { getByText } = render(<Text>Hello World</Text>)
    const textElement = getByText("Hello World")
    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveClass("atds-text")
    expect(textElement).toHaveClass("atds-text-base")
  })

  it("renders with custom size", () => {
    const customSize = Sizes.sm
    const { getByText } = render(<Text size={customSize}>Hello World</Text>)
    const textElement = getByText("Hello World")
    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveClass("atds-text")
    expect(textElement).toHaveClass(`atds-text-${customSize}`)
  })

  test("snapshot of component", () => {
    const { asFragment } = render(<Text>Hello World</Text>)

    expect(asFragment()).toMatchSnapshot()
  })
})
