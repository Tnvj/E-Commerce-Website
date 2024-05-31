import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const login = async (credentials: { username: string; password: string }) => {
  try {
    const response = await instance.post('/auth/login', credentials);
    const data = response.data;

    if (!data.token) {
      throw new Error('Invalid username or password');
    }

    const tokenExpiration = new Date().getTime() + 30 * 60 * 1000;
    localStorage.setItem('token', data.token);
    localStorage.setItem('tokenExpiration', tokenExpiration.toString());

    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid username or password');
    } else if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Login failed');
    }
  }
};

export const logout = async () => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    return true;
  } catch (error) {
    throw new Error('Logout failed');
  }
};

export const isTokenExpired = () => {
  const tokenExpiration = localStorage.getItem('tokenExpiration');
  if (!tokenExpiration) {
    return true;
  }
  const expirationTime = parseInt(tokenExpiration);
  return new Date().getTime() > expirationTime;
};

export const register = async (userData: {
  email: string;
  username: string;
  password: string;
  name: { firstname: string; lastname: string };
  address: { city: string; street: string; number: number; zipcode: string; geolocation: { lat: string; long: string } };
  phone: string;
}) => {
  try {
    const response = await instance.post('/users', userData);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Registration failed');
    }
  }
};
