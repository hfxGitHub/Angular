import axios from 'axios';
import {createTheURL} from '../until/createURL';

const instance = axios.create({
  timeout: 10000,
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: sessionStorage.getItem('token')
  },
});

export class HumidityAnalServices {
  getPage(params) {
    return instance.get(createTheURL('humidity', 'getPage'), {'params': params})
  }
}
