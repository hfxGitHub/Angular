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

export class EquipmentService {
  getEquipment(id) {
    return instance.get(createTheURL('equip', 'get'), {params: id});
  }

  addEquipment(params) {
    return instance.post(createTheURL('equip', 'add'), params);
  }

  updateEquipment(params) {
    return instance.post(createTheURL('equip', 'update'), params);
  }

  changeStatus(id) {
    return instance.get(createTheURL('equip', 'changeStatus'), {params: id});
  }

  delEquipment(id) {
    return instance.get(createTheURL('equip', 'del'), {params: id});
  }
}
