const API_KEY =
  'live_TTU6C016ZloqnAyBeIUjlJw0quJeuaoS4sEIp4VojEXlK2xKekU05W96qOKDoe2e';

export const getData = (breeds?: string[]) => {
  const preparedBreeds = breeds?.join(',');
  const request = `https://api.thecatapi.com/v1/images/search?limit=30${breeds?.length !== 0 ? `&breed_ids=${preparedBreeds}` : ''}&api_key=${API_KEY}`;

  return fetch(request)
    .then(res => res.json())
    .catch(error => {
      throw new Error(`Request error ${error}`);
    });
};
