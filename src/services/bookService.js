import api from '@config/api';

export const login = (email, pwd) => api.post('/auth/sign_in', { email, password: pwd });
