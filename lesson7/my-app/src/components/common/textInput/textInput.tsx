import * as React from 'react'

interface ITextInputProps {
  initValue: string
  inputFunc: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface ITextInputState {
  inputValue: string
}

export class TextInput extends React.Component<ITextInputProps, ITextInputState> {
  constructor(props: ITextInputProps) {
    super(props)
    this.state = {
      inputValue: props.initValue,
    }
    this.handleInputFunction = this.handleInputFunction.bind(this)
  }

  public render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputFunction} />
      </div>
    )
  }

  protected handleInputFunction(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: event.target.value,
    })
    this.props.inputFunc(event)
  }
}

export default TextInput
