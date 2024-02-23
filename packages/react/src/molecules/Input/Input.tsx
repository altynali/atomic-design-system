import React, {
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react"
import { Text } from "../../atoms/Text"
import { Margin } from "../../atoms/Margin"
// import "./Input.scss"

type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  onHandleChange?: (value: string) => void
}

const Input = forwardRef<HTMLInputElement, TInput>((props, ref) => {
  const {
    value,
    onHandleChange,
    label = "Label",
    id,
    placeholder = "Placeholder",
    ...rest
  } = props

  const [myValue, setMyValue] = useState(value)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setMyValue(value)
    onHandleChange?.(value)
  }

  return (
    <div className="atds-input">
      {label && (
        <Margin bottom>
          <label htmlFor={id} className="atds-input__label">
            <Text>{label}</Text>
          </label>
        </Margin>
      )}
      <input
        ref={ref}
        id={id}
        // name={name}
        onChange={handleChange}
        value={myValue}
        className="atds-input__input"
        placeholder={placeholder}
        //   className={cn(
        //     "border-2 border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none w-full text-black text-lg",
        //     className
        //   )}
        {...rest}
      />
    </div>
    // <div className="atds-input">
    // <button
    // data-testid="AtdsInputButton"
    // aria-controls="atds-input-list"
    // aria-haspopup={true}
    // aria-expanded={isOpen ? true : undefined}
    // className="atds-input__label"
    // onChange={onLabelClicked}
    // ref={ref}
    // onKeyDown={(event) =>
    // @ts-ignore
    // onButtonKeyDown(event, setIsOpen, highlightOption)
    // }
    // >
    // <Text>{label}</Text>
    // </button>
    // </div>
  )
})

export default Input
