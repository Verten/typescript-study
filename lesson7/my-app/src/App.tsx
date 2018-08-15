import * as React from 'react'
import { Link } from 'react-router-dom'
import './App.scss'
import logo from './logo.svg'
import Routes from './routes'

class App extends React.Component<React.Props<{}>, {}> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro" />
        <div className="App-component">
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/component/button">Button</Link>
            </li>
            <li>
              <Link to="/component/text-input">Text Input</Link>
            </li>
            <li>
              <Link to="/component/list">List</Link>
            </li>
            <li>
              <Link to="/component/select">Select</Link>
            </li>
          </ul>
        </div>
        <div className="App-component">
          <Routes />
        </div>
      </div>
    )
  }
}

export default App
