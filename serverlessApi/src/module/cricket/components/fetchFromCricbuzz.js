import fetch from 'node-fetch';


const options = {
    method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international',
    headers: {
      'X-RapidAPI-Key': 'b55dd737e7mshec2849083906f9ap1b4889jsn273c8cc160f6',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };

const dataFromCrickbuzz = async() => {
    try {
        const response = await fetch(options.url, options);
        const data = await response.json();
        return data.list;
        
    }catch(error){
        console.log(error);
    }
}

export default dataFromCrickbuzz;