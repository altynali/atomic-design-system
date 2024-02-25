export interface SelectOption {
  label: string
  value: string
}

export type RenderOptionProps = {
  option: SelectOption
  isSelected: boolean
  getOptionRecommendedProps: (overrideProps?: Object) => Object
}
