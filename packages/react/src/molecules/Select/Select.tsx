import React, {
  FC,
  useState,
  useEffect,
  useRef,
  KeyboardEventHandler,
  createRef,
} from "react"
import { Text } from "../../atoms/Text"
// import Spacing from 'atomic-design-system-foundation'

export interface SelectOption {
  label: string
  value: string
}

export type SelectProps = {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options?: SelectOption[]
  label?: string
  renderOption?: (props: RenderOptionProps) => React.ReactNode
}

export type RenderOptionProps = {
  option: SelectOption
  isSelected: boolean
  getOptionRecommendedProps: (overrideProps?: Object) => Object
}

export const KEYS = {
  ENTER: "Enter",
  SPACE: " ",
  DOWN_ARROW: "ArrowDown",
  ESC: "Escape",
  UP_ARROW: "ArrowUp",
}

const Select: FC<SelectProps> = ({
  options = [],
  label = "Please select an option ...",
  onOptionSelected,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const labelRef = useRef<HTMLButtonElement>(null)
  const [highlightedIndex, setHighlightedIndex] = useState<null | number>(null)
  const [overlayTop, setOverlayTop] = useState<number>(0)
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  )
  const [optionRefs, setOptionRefs] = useState<
    React.RefObject<HTMLLIElement>[]
  >([])

  useEffect(() => {
    if (labelRef.current && labelRef.current?.offsetHeight) {
      setOverlayTop((labelRef.current?.offsetHeight || 0) + 10)
    }
  }, [labelRef.current])

  useEffect(() => {
    setOptionRefs(options.map((_) => createRef<HTMLLIElement>()))
  }, [options.length])

  useEffect(() => {
    if (highlightedIndex !== null && isOpen) {
      const ref = optionRefs[highlightedIndex]

      if (ref && ref.current) {
        ref.current.focus()
      }
    }
  }, [isOpen, highlightedIndex])

  const handleOptionSelected = (option: SelectOption, index: number) => {
    setSelectedOption(option)
    onOptionSelected?.(option, index)
    setIsOpen(false)
  }

  const onLabelClicked = () => {
    setIsOpen(!isOpen)
  }

  const highlightOption = (optionIndex: number | null) => {
    setHighlightedIndex(optionIndex)
  }

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault()

    if ([KEYS.ENTER, KEYS.SPACE, KEYS.DOWN_ARROW].includes(event.key)) {
      setIsOpen(true)
      highlightOption(0)
    }
  }

  const onOptionKeyDown: KeyboardEventHandler = (event) => {
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

  return (
    <div className="atds-select">
      <button
        data-testid="AtdsSelectButton"
        aria-controls="atds-select-list"
        aria-haspopup={true}
        aria-expanded={isOpen ? true : undefined}
        className="atds-select__label"
        onClick={onLabelClicked}
        ref={labelRef}
        onKeyDown={onButtonKeyDown}
      >
        <Text>{selectedOption ? selectedOption.label : label}</Text>
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
      </button>

      {isOpen ? (
        <ul
          role="menu"
          style={{ top: overlayTop }}
          className="atds-select__overlay"
        >
          {options.map((option, index) => {
            const { value } = option
            const isSelected = selectedOption?.value === value
            const isHighlighted = highlightedIndex === index
            const ref = optionRefs[index]

            const renderOptionProps: RenderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps(overrideProps = {}) {
                return {
                  ref,
                  role: "menuitemradio",
                  "aria-label": option.label,
                  "aria-checked": isSelected ? true : undefined,
                  onKeyDown: onOptionKeyDown,
                  tabIndex: isHighlighted ? -1 : 0,
                  onMouseEnter: () => highlightOption(index),
                  onMouseLeave: () => highlightOption(null),
                  className: `atds-select__option
                                ${
                                  isSelected
                                    ? "atds-select__option--selected"
                                    : ""
                                }
                                ${
                                  isHighlighted
                                    ? "atds-select__option--highlighted"
                                    : ""
                                }
                            `,
                  key: option.value,
                  onClick: () => handleOptionSelected(option, index),
                  ...overrideProps,
                }
              },
            }

            if (renderOption) {
              return renderOption(renderOptionProps)
            }

            return (
              <li {...renderOptionProps.getOptionRecommendedProps()}>
                <Text>{option.label}</Text>

                {isSelected ? (
                  <svg
                    width="1rem"
                    height="1rem"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ) : null}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default Select

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
