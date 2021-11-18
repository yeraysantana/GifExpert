import { Category } from '../types/categories.types'
import { GiphyResponse } from '../types/gif.types'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';

interface Props {
  category: Category
}
 
const GifGrid = ({ category }: Props) => {

  const {loading, data: images} = useFetchGifs(category)
  return (
    <div className={'categoryContainer'}>
      <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
      {loading && <div className={'animate__animated animate__fadeIn'}>'Cargando...'</div>}
      {
        images.map((img: GiphyResponse) => (
          <GifGridItem key={String(img.id)} {...img} />
        ))
      }
    </div>
  )
}
 
export default GifGrid;