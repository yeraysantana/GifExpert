interface Props {
  url: string
  title?: string
}
 
const GifGridItem = ({ url, title = '' }: Props) => {
  return (
    <div className={'cardContainer animate__animated animate__fadeIn'}>
      <div className={'card'}>
        <h3>{title}</h3>
        <img src={String(url)} alt={title}/>
      </div>
    </div>
  )
}
 
export default GifGridItem;