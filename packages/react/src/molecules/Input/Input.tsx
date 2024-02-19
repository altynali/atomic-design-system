import React, { InputHTMLAttributes, forwardRef } from "react"
// import { Text } from "../Text"
// import "./Input.scss"

type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  // wrapperClasses?: ComponentProps<"div">["className"]
}

const Input = forwardRef<HTMLInputElement, TInput>(
  (
    {
      // wrapperClasses,
      label = "Label",
      className,
      id,
      name,
      value,
      placeholder = "Placeholder ...",
      ...rest
    },
    ref
  ) => {
    // const handleOptionSelected = (option: SelectOption, index: number) => {
    //   setSelectedOption(option)
    //   onOptionSelected?.(option, index)
    //   setIsOpen(false)
    // }

    return (
      <div className="atds-input">
        {label && (
          <label htmlFor={id} className="atds-input__label">
            {/* className="pl-1 mb-1 inline-block font-semibold"> */}
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          name={name}
          value={value}
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
  }
)

export default Input
