import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Checkbox from "./Checkbox"
import "@testing-library/jest-dom"

describe("Checkbox component", () => {
  it("applies custom className", () => {
    const { getByTestId } = render(<Checkbox className="custom" />)
    const checkbox = getByTestId("AtdsCheckbox")
    expect(checkbox).toHaveClass("custom")
  })

  it("applies custom width and height classes", () => {
    const { getByTestId } = render(<Checkbox width="lg" height="xl" />)
    const checkbox = getByTestId("AtdsCheckbox")
    expect(checkbox).toHaveClass("atds-width-lg")
    expect(checkbox).toHaveClass("atds-height-xl")
  })

  //   it("changes checked state when clicked", () => {
  //     const { getByTestId } = render(<Checkbox />)
  //     const checkbox = getByTestId("AtdsCheckbox")
  //     fireEvent.click(checkbox)
  //     expect(checkbox).not.toBeChecked()
  //   })
})
