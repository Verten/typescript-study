import greeter from './greeter'

const name = 'Typescript'

const content = greeter(name)

document.getElementById('content').innerText = content