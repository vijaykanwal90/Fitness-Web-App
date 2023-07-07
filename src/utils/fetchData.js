export   const exerciseOptions = {
  method: 'GET',
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '9e77090710msh6a8c38fd0d5a77dp1bde1cjsn2d856a40d302',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': 'deb58588a6msh552df0188e83e94p173e41jsn03c38b000981',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export  const fetchData = async (url,option)=>{
    const res = await fetch(url, option);
    const data = await res.json();
    return data;
};
// url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',