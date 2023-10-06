import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../constant/index';

export function request(options) {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers['Authorization'] = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
  }

  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: headers,
  });

  return instance(options)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      // Handle errors here
      throw error;
    });
}

export function login(loginRequest) {
  return request({
    url: '/user/sign-in',
    method: 'POST',
    data: loginRequest,
  });
}

// export function member(memberRequest) {
//   return request({
//     url: '/membership/apply',
//     method: 'POST',
//     data: memberRequest,
//   });
// }

export function payment(paymentRequest) {
  return request({
    url: '/checkout/success',
    method: 'POST',
    data: paymentRequest,
  });
}

export function register(registerRequest) {
  return request({
    url: '/user/sign-up',
    method: 'POST',
    data: registerRequest,
  });
}
