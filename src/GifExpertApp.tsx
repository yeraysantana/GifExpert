import { useState } from "react"
import AddCategory from './components/AddCategory';

interface GifExpertAppProps {
  
}
 
const GifExpertApp = (props: GifExpertAppProps) => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <AddCategory/>
      <ol>
        {
          categories.map( (category, i) => {
            return (
              <li key={`category-li-${category}-${i}`}>
                {category}
              </li>
            )
          })
        }
      </ol>
    </>
  )
}
 
export default GifExpertApp;