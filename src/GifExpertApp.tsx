import { useState } from "react"
import AddCategory from './components/AddCategory';
import GifGrid from "./components/GifGrid";
import { Categories } from './types/categories.types';
interface GifExpertAppProps {
  
}
 
const GifExpertApp = (props: GifExpertAppProps) => {
  const initData = [] as Categories
  const [categories, setCategories] = useState<Categories>(initData)
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <AddCategory setCategories={setCategories}/>
      <div>
        {
          categories.map( (category, i) => (
            <GifGrid
              key={`category-li-${category}-${i}`}
              category={category}
            />
          ))
        }
      </div>
    </>
  )
}
 
export default GifExpertApp;