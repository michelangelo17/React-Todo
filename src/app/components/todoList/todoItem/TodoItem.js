import React from 'react'
import { P } from '../../../emotionalThings/EmoTools'

const TodoItem = props => (
  <>
    {props.todo.completed ? (
      <P m='10px auto' lt>
        {props.todo.task}
      </P>
    ) : (
      <P m='10px auto'>{props.todo.task}</P>
    )}
  </>
)

export default TodoItem
