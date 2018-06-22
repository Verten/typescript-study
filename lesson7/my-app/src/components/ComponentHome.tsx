import * as React from 'react'

export interface IProps {
  name: string
}

export interface IState{
  count: number
}

export default class ComponentHome extends React.Component<IProps, IState> {
  public render() {
    return (
      <div>
        Please click one component in the left menu.
      </div>
    )
  }
}