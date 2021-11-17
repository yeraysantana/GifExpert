import { useEffect, useState } from 'react';
import { Category } from '../types/categories.types';
import { GiphyGif, GiphyResponse } from '../types/gif.types';
import FirstApp from '../../../03-counter-app/src/FirstApp';

interface Props {
  category: Category
}
 
const GifGrid = ({ category }: Props) => {

  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Olxih0NX14GXCP1ji7Q3xCUX5jxwmJ9k&q=${category}&limit=10`
    const response = await  fetch(url)
    const { data } = await response.json()

    const gifs = data.map( (img: GiphyGif) => {
          return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
          }
    })
    setImages(gifs)
    console.log(gifs)
  }

  return (
    <div>
      <h3>{ category }</h3>
      <ol>
          {
            images.map((imageData: GiphyResponse) => {
              return (
              <li key={String(imageData.id)}>
                <div>
                  <h3>{imageData.title}</h3>
                  <img src={String(imageData.url)} alt={imageData.title}/>
                </div>
              </li>
            )})
          }
      </ol>
    </div>
  )
}
 
export default GifGrid;