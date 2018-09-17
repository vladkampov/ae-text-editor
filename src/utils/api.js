import axios from 'axios';
import pick from 'lodash.pick';

let axiosInstance = axios.create();

export const makeRequest = (method, url, options = {}) => {
  const { data, params } = options;
  const headers = { ...axiosInstance.defaults.headers, ...options.headers };

  return axiosInstance({ method, url, data, params, headers })
    .then(response => pick(response, ['data', 'status']));
};

export const get = (url, config) => makeRequest('get', url, config);
export const requestHandlers = { get };


export default cb => cb(requestHandlers)
  .then(response => pick(response, ['data', 'status']))
  .catch(error => {
    if (error.error) {
      console.error(error.error);
    }

    return error.response ?
      Promise.reject({ error: true, ...pick(error.response, ['data', 'status']) }) :
      Promise.reject({ error: error.message });
  });
