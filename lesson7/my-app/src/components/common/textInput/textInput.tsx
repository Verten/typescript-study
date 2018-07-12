import * as React from 'react'

interface ITextInputProps {
  initValue: string
  inputFunc: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface ITextInputState {
  inputValue: string
}

export class textInput extends React.Component<ITextInputProps, ITextInputState> {
  static propTypes = {}

  constructor(props: ITextInputProps) {
    super(props)
    this.state = {
      inputValue: props.initValue,
    }
    this.handleInputFunction = this.handleInputFunction.bind(this)
  }

  handleInputFunction(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: event.target.value,
    })
    this.props.inputFunc(event)
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputFunction} />
      </div>
    )
  }
}

export default textInput
