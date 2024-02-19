import { Spacing } from "atomic-design-system-foundation"
import { SpacingType } from "atomic-design-system-foundation/src/types"
import React, { FC, PropsWithChildren } from "react"

type CardProps = {
  className?: string
  width?: SpacingType
  height?: SpacingType
} & PropsWithChildren

const Card: FC<CardProps> = (props) => {
  const { children, height = Spacing.lg, width = Spacing.lg } = props
  const className = `atds-card atds-min-width-${width} atds-min-height-${height}`

  return <div className={className}>{children}</div>
}

export default Card
