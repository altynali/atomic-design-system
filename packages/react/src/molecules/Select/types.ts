export interface SelectOption {
  label: string
  value: string
}

export type SelectProps = {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options: SelectOption[]
  label?: string
  renderOption?: (props: RenderOptionProps) => React.ReactNode
}

export type RenderOptionProps = {
  option: SelectOption
  isSelected: boolean
  getOptionRecommendedProps: (overrideProps?: Object) => Object
}
