import React, { FC, PropsWithChildren, FormEvent } from "react"
import { Button } from "../../atoms/Button"
import { Text } from "../../atoms/Text"
// import { Card } from "../../molecules/Card"

export type FormProps = {
  className?: string
  label?: string
  onSubmit?: () => void
  // TODO: customButtons
  // customButtons: ReactNode
} & PropsWithChildren

const Form: FC<FormProps> = (props) => {
  const { children, label, onSubmit } = props

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit?.()
  }

  return (
    <form
      className="atds-form"
      onSubmit={(event: FormEvent) => handleSubmit(event)}
    >
      {/* <Card> */}
      {label && (
        <label>
          {/* htmlFor={id} */}
          <Text>{label}</Text>
        </label>
      )}
      {children}
      <Button type="submit">Submit button</Button>
      {/* </Card> */}
    </form>
  )
}

export default Form
