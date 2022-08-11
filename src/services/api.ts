import axios from 'axios';
import { GithubUser } from '../types/GithubUser';
const BASE_URL = 'https://api.github.com';

export const getGithubUser = async (username: string): Promise<GithubUser> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users/${username}`);
    return data;
  } catch (err) {
    throw err;
  }
};