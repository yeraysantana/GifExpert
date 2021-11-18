import { useState } from "react"
import { Categories } from '../types/categories.types';

interface Props {
  setCategories: React.Dispatch<React.SetStateAction<Categories>>
}

const AddCategory = ({ setCategories }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newCategory = String(inputValue)
    if(newCategory.trim().length > 1){
      setCategories(rest => {
        if(rest.find(cat=> cat === newCategory) === undefined){
          return [newCategory, ...rest]
        }
        return [...rest]
      })
      setInputValue('')
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h2>Añadir Categoría</h2>
      <input
        autoComplete={'off'}
        name={ 'categoryInput' }
        type={ 'text' }
        value={ inputValue }
        onChange={ handleInputChange }
        placeholder={ 'Buscar un Gif' }
      />
    </form>
  )
}

export default AddCategory