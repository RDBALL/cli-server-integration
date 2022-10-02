import inquirer from 'inquirer';
import superagent from 'superagent';
import dotenv from 'dotenv';


dotenv.config();

console.log('Build your Sandwich');

const API = process.env.API_URL;
const questions = [
  {
    type: 'checkbox',
    name: 'bread',
    message: 'please select your type of bread',
    choices: ['White', 'Whole grain', 'Whole wheat', 'Vegan', 'Keto'],
  },
  {
    type: 'checkbox',
    name: 'meat',
    message: 'please select your type of meat',
    choices: ['Chicken', 'Chorizo', 'Prosciutto', 'Pastrami', 'Roast Beef', 'Salami', 'Turkey'],
  },
  {
    type: 'checkbox',
    name: 'vegetables',
    message: 'please select your vegetables',
    choices: ['Avocado', 'Lettuce', 'Olives', 'Onions', 'Peppers', 'Pickles', 'Sprouts'],
  },
  {
    type: 'checkbox',
    name: 'dressing',
    message: 'please select your dressing',
    choices: ['Aioli', 'Guacamole', 'Horseradish', 'Mayo', 'Mustard', 'Oil', 'Pesto'],
  },
  {
    type: 'confirm',
    name: 'toasted',
    message: 'do you want your sandwich toasted?',
  },
];


inquirer.prompt(questions).then((answer) => {
  (async () => {
    let foodRoute = `${API}/api/v1/food`;
    try {
      const res = await superagent.post(foodRoute)
        .send({
          Bread: answer.bread,
          Meat: answer.meat,
          Vegetables: answer.vegetables,
          Dressing: answer.dressing,
          Toasted: answer.toasted,
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
