import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

type SearchBarProps = {
  getCategoryByName : (search:string) => void
}

const SearchBar = ((props:SearchBarProps) => {
  const {getCategoryByName} = props
  const {category} = useParams()
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    setSearchText('')
  }, [category]);

  const onKeyDown= (event: KeyboardEvent<HTMLInputElement>)  => {
    console.log('aqui')
    if(event.key === 'Enter') {
      console.log('aqui')
      event.preventDefault()
      getCategoryByName(searchText)
      setSearchText('')
    }
  }

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value)
  }

  return (
    <div className={'flex gap-6 w-full items-center justify-center'}>
      <p>Buscar por nombre: </p>
      <input
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        value={searchText}
        className={'bg-transparent w-[20rem]  text-lg font-sans ring-2 ring-light-space py-1 px-2 rounded-lg'}
      />
    </div>
  );
})

export default SearchBar;