import React from 'react'
import TodoItem from './todoItem/TodoItem'
import { FlexContainer } from '../../emotionalThings/EmoTools'

const TodoList = props => (
  <>
    {props.state.searchString === ''
      ? props.state.todoArray.map(todo => (
          <FlexContainer
            onClick={e => props.handleCrossout(todo)}
            key={todo.id}
          >
            <TodoItem todo={todo} />
          </FlexContainer>
        ))
      : props.state.todoArray
          .filter(todo =>
            todo.task
              .toLowerCase()
              .includes(props.state.searchString.toLowerCase())
          )
          .map(todo => (
            <FlexContainer
              onClick={e => props.handleCrossout(todo)}
              key={todo.id}
            >
              <TodoItem todo={todo} />
            </FlexContainer>
          ))}
  </>
)
export default TodoList
