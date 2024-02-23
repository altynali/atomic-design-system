import React, { FC, PropsWithChildren } from "react"
import { Text } from "../../atoms/Text"
import { widthOrHeightToPixel } from "./../../utils"
import { Checkbox } from "../../atoms/Checkbox"

export type CardType = {
  label?: string
  description?: string
  id: string | number
}

export type CardProps = {
  className?: string
  width?: number
  height?: number
  index?: number
  withCheckbox?: boolean
} & PropsWithChildren &
  CardType

// TODO: card molecule or atom
const Card: FC<CardProps> = (props) => {
  const { children, label, description, height, width, withCheckbox } = props

  const className = `atds-card`

  return (
    <div
      className={className}
      style={{
        height: widthOrHeightToPixel(height),
        width: widthOrHeightToPixel(width),
      }}
    >
      <div className="atds-card__content">
        {withCheckbox && (
          // <Margin bottom>
          <Checkbox className="atds-card__checkbox" />
          // </Margin>
        )}
        <div>
          {label && (
            // <Margin bottom>
            <Text>{label}</Text>
            // </Margin>
          )}
          {description && (
            // <Margin bottom>
            <Text>{description}</Text>
            // </Margin>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export default Card
