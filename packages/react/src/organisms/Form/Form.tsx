import React, { FC } from "react"
import { Input } from "../../molecules/Input"
import { Select } from "../../molecules/Select"
import { Button } from "../../atoms/Button"

export interface FormProps {
  className?: string
}

const Form: FC<FormProps> = (props) => {
  //   const { className } = props
  return (
    <div className={""}>
      <Input /> 
      <Select />
      <Button>button</Button>
    </div>
  )
}
export default Form
