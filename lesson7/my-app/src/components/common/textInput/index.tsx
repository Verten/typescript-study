import * as React from 'react'
import TextInput from './textInput'

interface ITextInputHomeProps {
  pageName: string
}

interface ITextInputHomeState {
  value: string
}

export class TextInputHome extends React.Component<ITextInputHomeProps, ITextInputHomeState> {
  
  constructor(props: ITextInputHomeProps) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleInputFunction = this.handleInputFunction.bind(this)
  }

  public render() {
    return (
      <div>
        <p>Input value is: {this.state.value}</p>
        <TextInput initValue={''} inputFunc={this.handleInputFunction} />
      </div>
    )
  }

  protected handleInputFunction(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value,
    })
  }
}

export default TextInputHome
