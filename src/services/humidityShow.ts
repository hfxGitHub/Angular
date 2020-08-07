import axios from 'axios';
import {createTheURL} from '../until/createURL';

const instance = axios.create({
  timeout: 10000,
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: sessionStorage.getItem('token'),
    // Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0IiwiaWF0IjoxNTg4NTgzNjE3LCJzdWIiOiJtb25pdG9yIiwiaXNzIjoibW9uaXRvci5jb20iLCJleHAiOjE1ODg3NTY0MTd9.uBJeMYQOeoNMz9YHUD_XDCQsvXPtOoOXKtHmoHluaQY',
  },
});

export class HumidityShowService {
  getPage(params) {
    return instance.get(createTheURL('humidity', 'getPage'), {'params': params})
  }

  getWarnData() {
    return instance.get(createTheURL('humidity', 'getWarnData'))
  }
}
