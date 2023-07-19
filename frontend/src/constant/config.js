const prod = {
    url: {
      API_URL: 'http://192.168.253.17:3000',
    },
  };
  const dev = {
    url: {
      API_URL: 'https://loclahost:4000',
    },
  };
  export const config = process.env.NODE_ENV === 'development' ? dev : prod;