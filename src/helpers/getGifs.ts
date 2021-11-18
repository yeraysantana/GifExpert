import { Category } from '../types/categories.types';
import { GiphyGif, GiphyResponse } from '../types/gif.types';

export const getGifs = async(category: Category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Olxih0NX14GXCP1ji7Q3xCUX5jxwmJ9k&q=${encodeURI(category)}&limit=10`
  const response = await fetch(url)
  const { data } = await response.json()

  const gifs: GiphyResponse[] = data.map( ({id, title, images}: GiphyGif ): GiphyResponse => {
        return {
          id,
          title,
          url: images.downsized_medium.url
        }
  })
  return gifs
}