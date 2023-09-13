import axios from 'axios';



// const options = {
//   method: 'GET',
//   url: 'https://quiz26.p.rapidapi.com/questions',
//   headers: {
//     'X-RapidAPI-Key': '5cbe992ba7msh863033afc478086p1287c7jsn7f6d12c41f9d',
//     'X-RapidAPI-Host': 'quiz26.p.rapidapi.com'
//   }
// };

// const fetchData = async () => {
//   try {
//     const response = await axios.request(options);
//     // console.log(response.data);
//     return response.data; // Return the data
//   } catch (error) {
//     console.error(error);
//     return []; // Return an empty array in case of error
//   }
// };

// translation 

const translateText = async (text) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('source_language', 'en');
  encodedParams.set('target_language', 'es');
  encodedParams.set('text', text);


const trans_options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '5cbe992ba7msh863033afc478086p1287c7jsn7f6d12c41f9d',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const trans_response = await axios.request(trans_options);
	console.log("trans_response: " , trans_response.data);
  return trans_response.data;
} catch (trans_error) {
	console.error(trans_error);
}

};

// export { fetchData };
export { translateText };