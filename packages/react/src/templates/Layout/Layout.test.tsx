import React from "react"
import { render } from "@testing-library/react"
import Layout from "./Layout"
import "@testing-library/jest-dom"

describe("Layout component", () => {
  it("renders layout with default label and children", () => {
    const { getByText } = render(
      <Layout>
        <div>Content</div>
      </Layout>
    )
    const label = getByText("Todo App")
    const content = getByText("Content")
    expect(label).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it("renders layout without header if noHeader prop is true", () => {
    const { queryByTestId } = render(
      <Layout noHeader>
        <div>Content</div>
      </Layout>
    )
    const header = queryByTestId("header")
    expect(header).toBeNull()
  })

  it("renders layout without footer if noFooter prop is true", () => {
    const { queryByTestId } = render(
      <Layout noFooter>
        <div>Content</div>
      </Layout>
    )
    const footer = queryByTestId("footer")
    expect(footer).toBeNull()
  })

  it("applies custom className", () => {
    const { container } = render(
      <Layout className="custom">
        <div>Content</div>
      </Layout>
    )
    const layout = container.querySelector(".atds-layout")
    expect(layout).toHaveClass("custom")
  })

  it("renders layout with custom label", () => {
    const { getByText } = render(
      <Layout label="Custom Label">
        <div>Content</div>
      </Layout>
    )
    const label = getByText("Custom Label")
    expect(label).toBeInTheDocument()
  })

  test("snapshot of the base state", () => {
    const { asFragment } = render(<Layout />)

    expect(asFragment()).toMatchSnapshot()
  })
})
