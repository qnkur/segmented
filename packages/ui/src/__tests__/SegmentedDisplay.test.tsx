// packages/ui/src/__tests__/SegmentedDisplay.test.tsx
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import SegmentedDisplay from "../SegmentedDisplay"

describe("SegmentedDisplay", () => {
  it("renders the children correctly", () => {
    render(<SegmentedDisplay>Hello World</SegmentedDisplay>)
    // Check for the lit text
    expect(screen.getByText("Hello!World")).toBeInTheDocument()
    // Check for the unlit background text
    expect(screen.getByText("~~~~~~~~~~~")).toBeInTheDocument()
  })

  it("applies the default props", () => {
    render(<SegmentedDisplay>123</SegmentedDisplay>)
    const display = screen.getByText("123").parentElement?.parentElement
    expect(display).toHaveStyle("font-family: DSEG14-Classic-MINI")
    expect(display).toHaveStyle("font-weight: normal")
    expect(display).toHaveStyle("font-style: normal")
    expect(display).toHaveClass("not-italic font-normal")
  })

  it("applies custom props", () => {
    render(
      <SegmentedDisplay
        fontFamily="DSEG7Classic"
        fontWeight="bold"
        fontStyle="italic"
        className="custom-class"
      >
        456
      </SegmentedDisplay>
    )
    const display = screen.getByText("456").parentElement?.parentElement
    expect(display).toHaveStyle("font-family: DSEG7-Classic")
    expect(display).toHaveStyle("font-weight: bold")
    expect(display).toHaveStyle("font-style: italic")
    expect(display).toHaveClass("italic font-bold custom-class")
  })

  it("handles different unlit segment characters", () => {
    // For DSEG7, the unlit character should be '8'
    render(<SegmentedDisplay fontFamily="DSEG7Modern">ABC</SegmentedDisplay>)
    expect(screen.getByText("888")).toBeInTheDocument()

    // For DSEG14, the unlit character should be '~'
    render(<SegmentedDisplay fontFamily="DSEG14Modern">DEF</SegmentedDisplay>)
    expect(screen.getByText("~~~")).toBeInTheDocument()
  })
})
