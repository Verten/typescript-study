import * as React from 'react'

interface ISelectBoxProps {
  selectedValue: string
  data: Array<string>
  selectFunc: (value: React.MouseEvent) => void
}

interface ISelectBoxState {
  value: string
}

export default class SelectBox extends React.Component<ISelectBoxProps, ISelectBoxState> {
  constructor(props: ISelectBoxProps) {
    super(props)
    this.state = {
      value: this.initDefaultValue(props),
    }
  }

  public render(): JSX.Element {
    return (
      <div className="select-list-wrapper">
        <div tabIndex={0} className="select-value" onClick={this.handleSelectValueClicked}>
          {this.state.value}
        </div>
        <ul>{this.renderSelectBox(this.props.data)}</ul>
      </div>
    )
  }

  protected initDefaultValue(props: ISelectBoxProps): string {
    const { data, selectedValue } = props
    return data.some(tmpData => tmpData === selectedValue) ? selectedValue : data[0]
  }

  protected renderSelectBox(data: string[]): JSX.Element[] {
    let content: JSX.Element[] = []
    const dataKeys = Object.keys(data)
    if (dataKeys.length > 0) {
      dataKeys.map(_key => {
        content.push(
          <li
            key={_key}
            className="select-list-item"
            onClick={event => {
              this.handleSelectItemClicked(event)
            }}
            value={_key}>
            {Array.isArray.call(null, data) ? data[_key] : _key}
          </li>,
        )
      })
    } else {
      content.push(
        <li key="" className="select-list-item">
          {'no item'}
        </li>,
      )
    }
    return content
  }

  protected handleSelectValueClicked(): void {}

  protected handleSelectItemClicked(event: React.MouseEvent<HTMLLIElement>): void {
    this.props.selectFunc(event)
  }
}
