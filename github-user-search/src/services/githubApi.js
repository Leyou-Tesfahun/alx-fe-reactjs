const api = axios.create({
  baseURL: import.meta.env.VITE_APP_GITHUB_API_URL,
  // headers: {
  //   Authorization: import.meta.env.VITE_APP_GITHUB_TOKEN 
  //     ? `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`
  //     : undefined,
  // }
});
