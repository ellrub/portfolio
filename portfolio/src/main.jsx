import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))

document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block"
})

document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("menu").style.display = "none"
})