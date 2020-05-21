import api from '@config/api';

export const login = (email, password) => api.post('/auth/sign_in', { email, password });

export const index = () => api.get('/books');

export const setHeaders = (token, client, uid) => {
  return api.setHeaders({
    'Content-Type': 'application/json',
    'access-token': token,
    client,
    uid
  });
};
