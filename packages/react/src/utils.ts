export const NumberToPixel = (number: number) => {
  return number.toString() + "px"
}

export const widthOrHeightToPixel = (number: number | undefined) => {
  if (typeof number === "number") {
    return NumberToPixel(number)
  }
  return "fit-content"
}
