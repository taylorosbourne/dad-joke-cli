import { Command, flags } from '@oclif/command';
import fetch from 'node-fetch';

const API: string = 'https://icanhazdadjoke.com/'

class DadJokeCommand extends Command {
  async run() {
    const getDadJoke = async () => {
      const res = await fetch(API, {headers: {Accept: 'application/json'}});
      const data = await res.json();
      this.log(data.joke);
    }
    getDadJoke();
  };
};

DadJokeCommand.description = `There isn't much to it!  You want Dad jokes?  You'll get 'em!`;

DadJokeCommand.flags = {
   version: flags.version({char: 'v'}),
   help: flags.help({char: 'h'}),
};

module.exports = DadJokeCommand;
