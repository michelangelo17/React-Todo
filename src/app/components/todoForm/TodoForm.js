import React from 'react'
import {
  Button,
  TextInput,
  FlexContainer,
} from '../../emotionalThings/EmoTools'

const TodoForm = props => (
  <form onSubmit={props.handleSubmit}>
    <FlexContainer fdc aic>
      <TextInput
        onChange={props.handleChange}
        value={props.state.itemString}
        type='text'
        name='todoText'
        placeholder='todo item'
        w='90%'
        maxw='400px'
        m='15px'
      />
      <FlexContainer>
        <Button
          primary
          onClick={props.handleSubmit}
          type='submit'
          name='addTodoButton'
          p='7px'
          br='10px'
          m='5px'
        >
          Add to list
        </Button>
        <Button
          onClick={props.handleClear}
          type='button'
          name='clearCompletedButton'
          p='7px'
          br='10px'
          m='5px'
        >
          Clear Completed
        </Button>
      </FlexContainer>
    </FlexContainer>
  </form>
)

export default TodoForm
