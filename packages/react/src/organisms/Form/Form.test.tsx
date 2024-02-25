import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Form from "./Form"
import "@testing-library/jest-dom"

describe("Form component", () => {
  it("renders form with label and children", () => {
    const { getByTestId } = render(
      <Form label="Test Form" onSubmit={() => {}}>
        <input type="text" />
      </Form>
    )
    const form = getByTestId("AtdsForm")
    expect(form).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(<Form className="custom" />)
    const form = container.querySelector("form")
    expect(form).toHaveClass("custom")
  })

  it("calls onSubmit event handler when submitted", () => {
    const onSubmitMock = jest.fn()
    const { getByText } = render(<Form onSubmit={onSubmitMock} />)
    const submitButton = getByText("Submit")
    fireEvent.click(submitButton)
    expect(onSubmitMock).toHaveBeenCalledTimes(1)
  })

  test("snapshot of the base state", () => {
    const { asFragment } = render(<Form />)

    expect(asFragment()).toMatchSnapshot()
  })
})
