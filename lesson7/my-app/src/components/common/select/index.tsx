import * as React from 'react'
import SelectBox from './selectBox'

interface ISelectBoxHomeState {
  value: string
  data: string[]
}

export default class SelectBoxHome extends React.Component<{}, ISelectBoxHomeState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      data: ['Tom', 'Lily', 'Leo', 'Jack', 'Bob', 'Bin'],
      value: '',
    }
  }

  public render() {
    return (
      <div>
        <p>Selected value is: {this.state.value}</p>
        <SelectBox
          selectedValue={'Bob'}
          data={this.state.data}
          selectFunc={this.handleSelectedValue}
        />
      </div>
    )
  }

  protected handleSelectedValue(event: React.MouseEvent): void {
    const { value : attrValue } = event.currentTarget.attributes['value']
    alert(attrValue)
  }
}
