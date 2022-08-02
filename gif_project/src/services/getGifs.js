const apiKey = 'ueFwOrWl2xhITGAB50rLDYBNQ7VBDxMh';

export default function getGifs({keyword = 'gatitos'} = {}) 
{
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {

      const {data} = response
      const gifs = data.map(image => image.images.downsized_medium.url)

      return gifs;
    })
}