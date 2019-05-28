const {Command, flags} = require('@oclif/command')
const fetch = require('node-fetch')
const API = 'https://icanhazdadjoke.com/'

const getDadJoke = async () => {
  const res = await fetch(API, {
    headers: {
      Accept: 'application/json'
    }
  })
  const  data = await res.json()
  console.log(data.joke)
}
class DadJokeCommand extends Command {
  async run() {
    // const {flags} = this.parse(DadJokeCommand)
    // const name = flags.name || 'world'
    // this.log(`Dad Joke here`)
    getDadJoke()
  }
}

DadJokeCommand.description = `Describe the command here
...
Extra documentation goes here
`

DadJokeCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DadJokeCommand