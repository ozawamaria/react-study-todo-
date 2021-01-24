import React, { Component } from 'react';
import TodoList from './TodoList';/*TodoList.jsで指定したTodoListという関数を使う */
import './css/App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: "Hello, React!",
          desc: "React始めました",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux!",
          desc: "Reduxも始めました",
          done: false
        },
      ]
    }
  }

  //htmlとして渡したい変数などを設定
  render() {
    /*実際に返したいhtmlそのものを記述
    今回は、TodoList.jsでtodosという変数が使えるようになった*/
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <TodoList
          todos={this.state.todos}
          />
      </div>
    );
  }
}

export default App