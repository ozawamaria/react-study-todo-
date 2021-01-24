import './css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//public/index.html にある<div id="root"></div>にAppコンポーネントを挿入
ReactDOM.render(<App />, document.getElementById('root'))