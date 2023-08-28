import axios from 'axios';



const options = {
  method: 'GET',
  url: 'https://quiz26.p.rapidapi.com/questions',
  headers: {
    'X-RapidAPI-Key': '5cbe992ba7msh863033afc478086p1287c7jsn7f6d12c41f9d',
    'X-RapidAPI-Host': 'quiz26.p.rapidapi.com'
  }
};

const fetchData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data; // Return the data
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of error
  }
};

export { fetchData };
