import React, { FC, PropsWithChildren, FormEvent } from "react"
import { Button } from "../../atoms/Button"
import { Text } from "../../atoms/Text"
import { Padding } from "../../atoms/Padding"
import { Spacing } from "atomic-design-system-foundation"
import { classNames } from "../../utils"

export type FormProps = {
  className?: string
  label?: string
  onSubmit?: () => void
} & PropsWithChildren

const Form: FC<FormProps> = (props) => {
  const { children, label, onSubmit, className = "" } = props
  const idForm = `form-${label}`

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit?.()
  }

  return (
    <form
      className={classNames(className, ["atds-form"])}
      onSubmit={(event: FormEvent) => handleSubmit(event)}
      aria-label={idForm}
      data-testid="AtdsForm"
    >
      {label && (
        <Padding bottom space={Spacing.sm}>
          <label htmlFor={idForm} id={idForm}>
            <Text>{label}</Text>
          </label>
        </Padding>
      )}
      {children}
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Form
