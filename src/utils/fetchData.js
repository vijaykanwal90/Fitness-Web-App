export   const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'deb58588a6msh552df0188e83e94p173e41jsn03c38b000981',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  
  headers: {
    'X-RapidAPI-Key': 'deb58588a6msh552df0188e83e94p173e41jsn03c38b000981',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export  const fetchData = async (url,option)=>{
    const response = await fetch(url, option);
    const data = await response.json();
    return data;
}
