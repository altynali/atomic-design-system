import { KeyboardEvent } from "react"
import { SelectOption } from "./types"

export const KEYS = {
  ENTER: "Enter",
  SPACE: " ",
  DOWN_ARROW: "ArrowDown",
  ESC: "Escape",
  UP_ARROW: "ArrowUp",
}

const getPreviousOptionIndex = (
  currentIndex: number | null,
  options: Array<SelectOption>
) => {
  if (currentIndex === null) {
    return 0
  }

  if (currentIndex === 0) {
    return options.length - 1
  }

  return currentIndex - 1
}

const getNextOptionIndex = (
  currentIndex: number | null,
  options: Array<SelectOption>
) => {
  if (currentIndex === null) {
    return 0
  }

  if (currentIndex === options.length - 1) {
    return 0
  }

  return currentIndex + 1
}

export const onOptionKeyDown = (
  event: KeyboardEvent<Element>,
  setIsOpen: (isOpen: boolean) => void,
  highlightOption: (highlightedOption: number) => void,
  handleOptionSelected: (option: SelectOption, index: number) => void,
  options: Array<SelectOption>,
  highlightedIndex: null | number
) => {
  if (event.key === KEYS.ESC) {
    setIsOpen(false)

    return
  }

  if (event.key === KEYS.DOWN_ARROW) {
    highlightOption(getNextOptionIndex(highlightedIndex, options))
  }

  if (event.key === KEYS.UP_ARROW) {
    highlightOption(getPreviousOptionIndex(highlightedIndex, options))
  }

  if (event.key === KEYS.ENTER) {
    handleOptionSelected(options[highlightedIndex!], highlightedIndex!)
  }
}

export const onButtonKeyDown = (
  event: KeyboardEvent<HTMLButtonElement>,
  setIsOpen: (isOpen: boolean) => void,
  highlightOption: (highlightedOption: number) => void
) => {
  event.preventDefault()

  if ([KEYS.ENTER, KEYS.SPACE, KEYS.DOWN_ARROW].includes(event.key)) {
    setIsOpen(true)
    highlightOption(0)
  }
}
