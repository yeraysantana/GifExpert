import { useState } from "react"

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <>
      <h2>Añadir Categoría</h2>
      <input
        type={'text'}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={'Buscar un Gif'}
      />
    </>
  )
}

export default AddCategory