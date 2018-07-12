import * as React from 'react'

interface IListProps {
  data: Array<string>
}

export class SimpleList extends React.Component<IListProps, {}> {
  static propTypes = {}

  constructor(props: IListProps) {
    super(props)
    this.state = {}
  }

  renderDataList(data: Array<string>): JSX.Element {
    const liContent: JSX.Element[] = []
    data.map((_data, index) => {
      liContent.push(<li key={index}>{_data}</li>)
    })
    return <ul>{liContent}</ul>
  }

  render() {
    return <div>{this.renderDataList(this.props.data)}</div>
  }
}
export default SimpleList
