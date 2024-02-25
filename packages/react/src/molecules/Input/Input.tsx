import React, {
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react"
import { Text } from "../../atoms/Text"
import { Margin } from "../../atoms/Margin"
import { Spacing } from "atomic-design-system-foundation/lib/src"
import { classNames } from "../../utils"
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
    className = "",
    ...rest
  } = props

  const [myValue, setMyValue] = useState(value)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setMyValue(value)
    onHandleChange?.(value)
  }

  return (
    <div className={classNames(className, ["atds-input"])}>
      {label && (
        <Margin bottom space={Spacing.sm}>
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
        {...rest}
      />
    </div>
  )
})

export default Input
