import axios from 'axios';

const API_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return {
      data: response.data,
      error: null,
      isLoading: false
    };
  } catch (error) {
    return {
      data: null,
      error: 'User not found',
      isLoading: false
    };
  }
};
