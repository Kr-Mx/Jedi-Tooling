import React from 'react'
import logo from './logo.svg'
import './App.scss'
// eslint-disable-next-line import/order
import styled from 'styled-components'

const Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  text-decoration: none;
  margin: 1em;
  padding: 0.25em 1em;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button href="https://styled-components.com/">Styled Button</Button>
      </header>
    </div>
  )
}

export default App
