import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import ButtonHome from './components/common/button'
import TextInputHome from './components/common/textInput'
import ListHome from './components/common/list'
import ComponentHome from './components/ComponentHome'
import NotFoundPage from './components/page/NotFound'
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
  <Switch>
    <Route exact={true} path="/" component={ComponentHome} />
    <Route path="/component/button" component={ButtonHome} />
    <Route path="/component/text-input" component={TextInputHome} />
    <Route path="/component/list" component={ListHome} />
    <Route path="/*" component={NotFoundPage} />
  </Switch>
)

export default Routes
