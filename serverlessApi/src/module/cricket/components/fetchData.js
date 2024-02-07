import fetch from 'node-fetch';

const apiOptions = {
  baseUrl: 'https://cricbuzz-cricket.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'b55dd737e7mshec2849083906f9ap1b4889jsn273c8cc160f6',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
  },
};

const fetchData = async (path) => {
  const url = `${apiOptions.baseUrl}${path}`;

  try {
    const response = await fetch(url, apiOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;
