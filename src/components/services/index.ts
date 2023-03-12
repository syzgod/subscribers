const API_URL = 'https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber';

export const fetchSubscribersData = (from: number, to: number) => {
  return fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((data) => {
      const subscribers = data.slice(from, to);
      return { count: data.length, data: subscribers };
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
      throw error;
    });
};
