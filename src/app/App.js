import React, { Component } from 'react'
import TodoForm from './components/todoForm/TodoForm'
import EmoGlobal from './emotionalThings/EmoGlobal'
import { H1 } from './emotionalThings/EmoTools'
import TodoList from './components/todoList/TodoList'
import Search from './components/search/Search'

class App extends Component {
  constructor() {
    super()
    let storedArray = []
    if (localStorage.getItem('todoArray'))
      storedArray = JSON.parse(localStorage.getItem('todoArray'))
    this.state = {
      todoArray: storedArray,
      itemString: '',
      searchString: '',
    }
  }
  componentDidUpdate() {
    localStorage.setItem('todoArray', JSON.stringify(this.state.todoArray))
  }
  handleClear = () => {
    this.setState({
      todoArray: this.state.todoArray.filter(todo => !todo.completed),
    })
  }
  handleCrossout = todo => {
    this.setState({
      todoArray: this.state.todoArray.map(todoItem =>
        todo.id === todoItem.id
          ? {
              task: todoItem.task,
              id: todoItem.id,
              completed: !todoItem.completed,
            }
          : todoItem
      ),
    })
  }
  handleChange = e => {
    this.setState({ itemString: e.target.value })
  }
  handleSearch = e => {
    this.setState({ searchString: e.target.value })
    console.log(this.state)
  }
  handleSubmit = e => {
    e.preventDefault()
    const newItem = {
      task: this.state.itemString,
      id: Date.now(),
      completed: false,
    }
    this.state.itemString !== '' &&
      this.setState({
        todoArray: [...this.state.todoArray, newItem],
        itemString: '',
      })
  }
  render() {
    return (
      <>
        <EmoGlobal />
        <H1 ta='center' m='10px 0 20px 0'>
          My Todos
        </H1>
        <TodoForm
          handleClear={this.handleClear}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
        <Search handleSearch={this.handleSearch} state={this.state} />
        <TodoList handleCrossout={this.handleCrossout} state={this.state} />
      </>
    )
  }
}

export default App
