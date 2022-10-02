import inquirer from 'inquirer';
import superagent from 'superagent';
import dotenv from 'dotenv';

dotenv.config();

console.log('Create User');

const API = process.env.API_URL;
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'please enter a username',
  },
  {
    type: 'password',
    name: 'password',
    message: 'please enter a password',
  },
  {
    type: 'list',
    name: 'role',
    message: 'please select a user role',
    choices: ['user', 'writer', 'editor', 'admin'],
  },
];

inquirer.prompt(questions).then((answer) => {
  (async () => {
    let postRoute = `${API}/signup`;
    try {
      const res = await superagent.post(postRoute)
        .send({ username: answer.username, password: answer.password, role: answer.role });
      if (res.status === 201) {
        return console.log(` ${res.status} successfully created ${answer.username} with the role of ${answer.role}`);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.error(err);
    }
  })();
});