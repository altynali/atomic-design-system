import React from "react"

const CaretIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`atds-select__caret ${
      isOpen ? "atds-select__caret--open" : "atds-select__caret--closed"
    }`}
    width="1rem"
    height="1rem"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M19 9l-7 7-7-7" />
  </svg>
)

export default CaretIcon
