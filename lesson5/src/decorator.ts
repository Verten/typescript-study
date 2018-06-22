const validateEmptyParameter = function(target: any, propsKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value
  descriptor.value = function(newParameter: string) {
    if (newParameter === '') {
      console.error('parameter was empty, can not set to property')
    } else {
      method.apply(this, [newParameter])
      //method.call(target, newParameter)
    }
  }
}

export default validateEmptyParameter
