import React, {
  FC,
  useState,
  useEffect,
  useRef,
  createRef,
  KeyboardEvent,
  MouseEvent,
} from "react"
import { Text } from "../../atoms/Text"
import { onButtonKeyDown, onOptionKeyDown } from "./utils"
import CaretIcon from "./assets/CaretIcon"
import ArrowIcon from "./assets/ArrowIcon"
import { RenderOptionProps, SelectOption } from "./types"
import { classNames } from "../../utils"

export type SelectProps = {
  className?: string
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options: SelectOption[]
  label?: string
  renderOption?: (props: RenderOptionProps) => React.ReactNode
}

const Select: FC<SelectProps> = ({
  className = "",
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

  const onLabelClicked = (event: MouseEvent) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  const highlightOption = (optionIndex: number | null) => {
    setHighlightedIndex(optionIndex)
  }

  return (
    <div className={classNames(className, ["atds-select"])}>
      <button
        data-testid="AtdsSelectButton"
        aria-controls="atds-select-list"
        aria-haspopup={true}
        aria-expanded={isOpen ? true : undefined}
        className="atds-select__label"
        onClick={(event: MouseEvent) => onLabelClicked(event)}
        ref={labelRef}
        onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) =>
          onButtonKeyDown(event, setIsOpen, highlightOption)
        }
      >
        <Text>{selectedOption ? selectedOption.label : label}</Text>
        <CaretIcon isOpen={isOpen} />
      </button>

      <ul
        role="menu"
        style={{ top: overlayTop }}
        className={`atds-select__overlay ${
          isOpen ? "atds-select__overlay--open" : ""
        }`}
        id="atds-select-list"
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
                "aria-checked": isSelected ? true : false,
                onKeyDown: (event: KeyboardEvent) =>
                  onOptionKeyDown(
                    event,
                    setIsOpen,
                    highlightOption,
                    handleOptionSelected,
                    options,
                    highlightedIndex
                  ),
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
              {isSelected ? <ArrowIcon /> : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Select
