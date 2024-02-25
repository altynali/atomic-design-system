import React, { useState } from "react"
import {
  // Color,
  Select,
  // Text,
  Form,
  Input,
  Layout,
  Padding,
  CardList,
  Grid,
  Card,
  // Button,
  // Padding,
} from "atomic-design-system-react"
import "atomic-design-system-scss/lib/global.css"
import { Spacing } from "atomic-design-system-foundation"
import { options } from "./data"
import { CardType, PrioritySelectOption } from "./types"

const App = () => {
  const [cards, setCards] = useState<CardType[]>([])
  const [todoLabel, setTodoLabel] = useState<string>("")
  const [priority, setPriority] = useState<string>("")

  const handleTodoChange = (todo: string) => {
    setTodoLabel(todo)
  }

  const handlePrioritySelected = (
    option: PrioritySelectOption,
    index: number
  ) => {
    setPriority(option.label)
  }

  const handleAddTodo = () => {
    if (!todoLabel || !priority) return

    const newTodo: CardType = {
      label: todoLabel,
      id: Date.now(),
      priority,
    }
    setCards([...cards, newTodo])
  }

  return (
    // Layout + padding = container
    // <Suspense fallback={<div>Loading...</div>}>
    <Layout>
      <Padding bottom space={Spacing.sm}>
        <Form label="Add Todo" onSubmit={handleAddTodo}>
          <Padding bottom space={Spacing.sm}>
            <Input value={todoLabel} onHandleChange={handleTodoChange} />
          </Padding>
          <Padding bottom space={Spacing.sm}>
            <Select
              options={options}
              onOptionSelected={handlePrioritySelected}
            />
          </Padding>
        </Form>
      </Padding>
      <Grid>
        {cards.map((card, index) => {
          const { id, label, priority } = card
          return (
            <Card
              key={card.id}
              index={index}
              label={label}
              id={id}
              description={"Priority:" + priority}
              height={100}
              width={200}
              withCheckbox
            />
          )
        })}
      </Grid>
    </Layout>
    // </Suspense>
  )
}

export default App
