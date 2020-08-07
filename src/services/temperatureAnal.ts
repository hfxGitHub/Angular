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

export class TemperatureAnalServices {
  getPage(params) {
    return instance.get(createTheURL('temp', 'getPage'), {'params': params})
  }
}
