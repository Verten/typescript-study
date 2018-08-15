import * as React from 'react'
import CommonButton from './button'

export interface IButtonHomeProps {
  name: string
}

export interface IButtonHomeState {
  show: boolean
}

export default class ButtonHome extends React.Component<IButtonHomeProps, IButtonHomeState> {
  constructor(props: IButtonHomeProps) {
    super(props)

    this.state = {
      show: true
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <CommonButton
          name="Click Me"
          clickFunc={this.handleClickFunction}
        />
      </div>
    )
  }

  private handleClickFunction(): void{
    alert('clicked!')
  }
}
