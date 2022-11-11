export const getGif = async (category) => {
      
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jp26ZLRG0Pmu6HDhLxJp0Nzyuml1UyME&q=${category}&limit=5`
    const resp = await fetch(url)
    const {data} = await resp.json()
    
  
    const gifs = data.map( img => ({
  
      id: img.id,
      title: img.title,
      url: img.images.downsized_large.url
      
    }))
  
    console.log(gifs)
    return gifs;
  
  
  }