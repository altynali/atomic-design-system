import React, { FC, PropsWithChildren } from "react"
import { NumberToPixel } from "../../utils"

export type GridProps = {
  className?: string
  columns?: number
  gap?: number
} & PropsWithChildren

const Grid: FC<GridProps> = (props) => {
  const { columns, gap = 3, children } = props

  return (
    <div
      className={columns !== 0 || undefined ? "atds-grid-with-flex" : "atds-grid"}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: NumberToPixel(gap),
      }}
    >
      {children}
    </div>
  )
}

export default Grid
