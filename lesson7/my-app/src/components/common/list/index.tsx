import * as React from 'react'
import SimpleList from './simpleList'

interface IListHomeProps {
  pageName: string
}

export class ListHome extends React.Component<IListHomeProps, {}> {

  constructor(props: IListHomeProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <div>
        <SimpleList data={['Tom', 'Lily', 'Leo', 'Jack', 'Bob']} />
      </div>
    )
  }
}

export default ListHome
