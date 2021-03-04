import axios from 'axios';
import { Posts } from '../helpers/types';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
export const getPosts = () =>
  new Promise((resolve, reject) => {
    api
      .get(`wp-json/wp/v2/posts`)
      .then((response) => {
        resolve(response.data as Posts);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getSinglePost = () =>
  new Promise((resolve, reject) => {
    api
      .get(`auth`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
