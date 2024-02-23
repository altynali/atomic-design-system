// import { Spacing } from "atomic-design-system-foundation"
// import { SpacingType } from "atomic-design-system-foundation/src/types"
import React, { FC } from "react"
import { Card, CardType } from "../Card"

type CardProps = {
  className?: string
  cards: CardType[]
}
// TODO: pryc nebo ne
const CardList: FC<CardProps> = (props) => {
  const { cards } = props
  // const className = `atds-card atds-min-width-${width} atds-min-height-${height}`

  return (
    <div className={""}>
      {cards.map((card, index) => (
        <Card key={card.id} index={index} {...card}></Card>
      ))}
    </div>
  )
}

export default CardList
