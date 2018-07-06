import * as React from 'react'

export interface IButtonProps {
  name: string
  clickFunc: () => void
}

export interface IButtonState {
  disable: boolean
}

export default class Button extends React.Component<IButtonProps, IButtonState> {
  constructor(props: IButtonProps) {
    super(props)
    this.state = {
      disable: false,
    }
  }

  public render() {
    return (
      <div>
        <button id={this.props.name} onClick={this.props.clickFunc} disabled={this.state.disable}>
          {this.props.name}
        </button>
      </div>
    )
  }
}
