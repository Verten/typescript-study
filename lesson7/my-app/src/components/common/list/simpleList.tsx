import * as React from 'react'

interface IListProps {
  data: string[],
}

export class SimpleList extends React.Component<IListProps, {}> {

  constructor(props: IListProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return <div>{this.renderDataList(this.props.data)}</div>
  }

  protected renderDataList(data: string[]): JSX.Element {
    const liContent: JSX.Element[] = []
    data.map((tmpData, index) => {
      liContent.push(<li key={index}>{tmpData}</li>)
    })
    return <ul>{liContent}</ul>
  }
}
export default SimpleList
