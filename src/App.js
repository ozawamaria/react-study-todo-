import React, { Component } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import './css/App.css'


class App extends Component {

  constructor() {
    super()
    const todos = []
    this.state = {
      isLoading: false,
      hasError: false,
      todos: todos,
      countTodo: todos.length + 1,
    }
  }

  /*追加ボタンを押したときの処理*/
  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice()
    const countTodo = this.state.countTodo

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false,
    });

    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1 })


    e.target.title.value = '';
    e.target.desc.value = '';
  }

  /*完了ボタンを押したときの処理 */
  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;

    this.setState({ todos });
  }

  /*ファイルからデータを読み込む処理*/
  fetchData(url) {
    this.setState({ isLoading: true })
    fetch(url)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false })
        return response
      })
      .then((response) => response.json())
      .then((data) => {
        let countTodo = this.state.countTodo
        const todos = data.map(data => {
          const todo = Object.assign({}, data, { id: countTodo++, done: false })
          return todo
        })
        this.setState({ todos, countTodo })
      })
      .catch(() => this.setState({ hasError: true }))
  }

  /*ファイルからデータを読み込む*/
  componentDidMount() {
    this.fetchData('data.json');
  }

  /*削除ボタンを押したときの処理*/
  deleteTodoState(clickTodo) {
    const todos = this.state.todos.slice();
    todos.splice(clickTodo.index, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="app">
        <h1>todoアプリ</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
          isLoading={this.state.isLoading}
          deleteTodoState={this.deleteTodoState.bind(this)}
          hasError={this.state.hasError}
          />
      </div>
    );
  }
}

export default App