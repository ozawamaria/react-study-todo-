import React, { Component } from 'react'
import './css/form.css'

/*Todoのタイトルと説明を入力するフォーム */
class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <input name="title" type="text" placeholder="タイトル ※必須" defaultValue="" /><br/>
          <textarea name="desc" placeholder="説明を入力" defaultValue=""></textarea><br/>
          <button type="submit">todoを作成</button>
        </form>
      </div>
    )
  }
}

export default Form