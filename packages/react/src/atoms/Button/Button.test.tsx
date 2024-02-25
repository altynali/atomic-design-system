import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Button from "./Button"
import { Sizes } from "atomic-design-system-foundation/lib/src"
import "@testing-library/jest-dom"

describe("Button component", () => {
  it("renders button with provided children", () => {
    const { getByText } = render(<Button>Hello</Button>)
    const button = getByText("Hello")
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe("BUTTON")
  })

  it("applies custom className", () => {
    const { container } = render(<Button className="custom">Click me</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("custom")
  })

  it("applies custom size class", () => {
    const customSize = Sizes.lg

    const { container } = render(<Button size={customSize}>Click me</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass(`atds-button-${customSize}`)
  })

  it("applies custom hexCode as backgroundColor style", () => {
    const hexCode = "#FF0000"
    const { container } = render(<Button hexCode={hexCode}>Click me</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveStyle(`background-color: ${hexCode}`)
  })

  it("fires onClick event when clicked", () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    )
    const button = getByText("Click me")
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test("snapshot of component", () => {
    const { asFragment } = render(<Button>Hello World</Button>)

    expect(asFragment()).toMatchSnapshot()
  })
})
