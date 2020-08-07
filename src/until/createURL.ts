import createBaseURL from './ip'

export function createTheURL(modelAPI, interfaceType) {
  modelAPI = '/' + modelAPI;
  interfaceType = '/' + interfaceType;
  const baseURL = createBaseURL();
  const IP = baseURL + modelAPI + interfaceType;
  return IP;
}
