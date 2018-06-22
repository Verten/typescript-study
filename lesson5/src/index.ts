import validateEmptyParameter from './decorator'

class Man {
  name: string

  constructor(name: string) {
    this.name = name
  }

  @validateEmptyParameter
  setName(v: string) {
    this.name = v
  }

  public get getName(): string {
    console.info('getting name')
    return this.name
  }
}

const binHong = new Man('Bin Hong')
console.info(binHong)
binHong.setName('')
binHong.setName('bin hong!')
console.info(binHong.getName)
