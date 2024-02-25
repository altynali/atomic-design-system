export const NumberToPixel = (number: number) => {
  return number.toString() + "px"
}

export const widthOrHeightToPixel = (number: number | undefined) => {
  if (typeof number === "number") {
    return NumberToPixel(number)
  }
  return "fit-content"
}

export const classNames = (cls: string, additional: string[] = []): string => {
  const classes = [cls, ...additional?.filter(Boolean)]

  return classes.join(" ")
}
