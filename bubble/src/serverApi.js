import base64 from 'base-64';
import conf from './config/config.js';

export function searchNeighbors (searchString) {
  const url = new URL(conf.backend.url + '/search');
  const address = searchString
    .split(' ')
    .map(str => str.split(' '))
    .reduce((obj, arr, i) => {
      obj[i] = arr.join('_')
      return obj;
    }, {});
  Object.keys(address).forEach(key => url.searchParams.append(key, address[key]));
  const config = new Request (url.href, {method: 'GET'});
  return fetch(config);
}

export function registerNewUser (data) {
  const config = new Request (conf.backend.url + '/signup', {
      method: 'POST',
      body : JSON.stringify(data),
	    headers: new Headers({
		    'Content-Type': 'application/json'
	    })
    })
  return fetch(config);
}

export function loginUserServerApi (data) {
  const config = new Request (conf.backend.url + '/login', {
      method: 'POST',
      body : JSON.stringify(data),
	    headers: new Headers({
		    'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(data.username + ":" + data.password)
	    })
    })
  return fetch(config);
}

export function logoutUser (data) {
  const config = new Request (conf.backend.url + `/logout/:${data}`, {
      method: 'PUT',
    })
  return fetch(config);
}

export function deleteUser (data) {
  const config = new Request (conf.backend.url + `/deleteUser/:${data}`, {
      method: 'DELETE',
    })
  return fetch(config);
}

export function getAllUsers (data) {
  const config = new Request (conf.backend.url + `/getAllUsers/:${data}`, {
      method: 'GET',
    })
  return fetch(config);
}
