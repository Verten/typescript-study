import * as React from 'react'

export interface IButtonProps {
  name: string
  clickFunc: () => void
}

export interface IButtonState{
  count: number
}

export default class Button extends React.Component<IButtonProps, IButtonState> {
  public render() {
    return (
      <div>
        Button Component
      </div>
    )
  }
}