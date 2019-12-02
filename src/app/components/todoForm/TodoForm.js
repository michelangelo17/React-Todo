import React, { Component } from 'react'
import {
  Button,
  TextInput,
  FlexContainer,
} from '../../emotionalThings/EmoTools'

class TodoForm extends Component {
  constructor() {
    super()
    this.state = {
      itemString: '',
    }
  }
  handleChange = e => {
    this.setState({ itemString: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const newItem = {
      task: this.state.itemString,
      id: Date.now(),
      completed: false,
    }
    this.state.itemString !== '' && this.props.addNewItem(newItem)
    this.setState({ itemString: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FlexContainer fdc aic>
          <TextInput
            onChange={this.handleChange}
            value={this.state.itemString}
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
              onClick={this.props.handleSubmit}
              type='submit'
              name='addTodoButton'
              p='7px'
              br='10px'
              m='5px'
            >
              Add to list
            </Button>
            <Button
              onClick={this.props.handleClear}
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
  }
}

export default TodoForm
