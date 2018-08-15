import * as React from 'react'
import { Link } from 'react-router-dom'

export interface IMenuObject {
  name: string
  path: string
}

export interface IMenuProps {
  menu: IMenuObject[]
}

export default class Menu extends React.Component<IMenuProps, {}> {
  constructor(props: IMenuProps) {
    super(props)
    this.state = {}
  }

  public renderMenu(): any[] {
    const { menu } = this.props
    const menuContent: any[] = []
    menu.map(menuObject => {
      menuContent.push(
        <li key={menuObject.name}>
          <Link to={menuObject.path}>{menuObject.name}</Link>
        </li>,
      )
    })
    return menuContent
  }

  public render() {
    return <ul className="App-menu">{this.renderMenu()}</ul>
  }
}
