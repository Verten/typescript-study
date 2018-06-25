import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import ButtonComponent from './components/common/button/button'
import ComponentHome from './components/ComponentHome'
// import { IProps } from './components/ComponentHome'

// const routes = [
//   {
//     path: '/',
//     exact: true,
//     component: () => <App />,
//   },
//   {
//     path: '/home',
//     component: (props: IProps) => <ComponentHome {...props} />,
//   },
// ]

const Routes: () => JSX.Element = () => (
  <div>
    <Switch>
      <Route exact={true} path="/" component={ComponentHome} />
      <Route path="/button" component={ButtonComponent} />
    </Switch>
  </div>
)

export default Routes
