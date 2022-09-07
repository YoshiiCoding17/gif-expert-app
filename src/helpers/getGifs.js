export const getGifs = async function(category){
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TDexjH4En2ARU4c76qChQZIATPsHXktw&q=${category}&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map(function(img){
      return{
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
      }
    });
    return gifs;
  };