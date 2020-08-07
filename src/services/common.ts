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

export class CommonServices {
  logout() {
    return instance.get(createTheURL('user', 'logout'));
  }

  getEquipment() {
    return instance.get(createTheURL('equip', 'get'));
  }
}
