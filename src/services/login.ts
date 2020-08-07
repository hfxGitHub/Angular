import axios from 'axios';
import {createTheURL} from '../until/createURL';

const instance = axios.create({
  timeout: 10000,
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export class LoginServices {
  login(data) {
    return instance.post(createTheURL('user', 'login'), data);
  }

  register(data) {
    return instance.post(createTheURL('user', 'register'), data);
  }
}
