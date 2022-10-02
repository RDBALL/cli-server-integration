import inquirer from 'inquirer';
import superagent from 'superagent';
import dotenv from 'dotenv';


dotenv.config();

console.log('Select your drink, press enter without selected a drink to skip');

const API = process.env.API_URL;
const questions = [
  {
    type: 'checkbox',
    name: 'beer',
    message: 'please select your drink of choice',
    choices: ['Amber Ale', 'Brown Ale', 'Doppelbock', 'IPA', 'Pilsner', 'Porter', 'Stout'],
  },
  {
    type: 'checkbox',
    name: 'mixed',
    message: 'please select your drink of choice',
    choices: ['Cosmo', 'Daiquiri', 'Irish Coffee', 'Mai Tai', 'Martini', 'Old-Fashioned'],
  },
  {
    type: 'checkbox',
    name: 'non',
    message: 'please select your drink of choice',
    choices: ['Arnold Palmer', 'Chai', 'Coffee', 'Horchata', 'Tea', 'Water'],
  },
];


inquirer.prompt(questions).then((answer) => {
  (async () => {
    let drinkRoute = `${API}/api/v1/drinks`;
    try {
      const res = await superagent.post(drinkRoute)
        .send({
          beer: answer.beer,
          mixed: answer.mixed,
          non: answer.non,
        });
      if (res.status === 201) {
        return console.log(` ${res.status} success, your order is in!`);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.error(err);
    }
  })();
});
