import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategoryList} from "../../api/getCategoryList";
import {IPeople, IPlanets, IStarShips} from "../../types";
import Paginate from "../../components/Paginate";
import SearchBar from "../../components/SearchBar";
import ListCategoriesItem from "../../components/ListCategoriesItem";
import Loader from "../../components/Loader";

type CategoryType =  'people' | 'starships' | 'planets'

const Category = () => {
  const {category} = useParams()
  const [data,setData] = useState<IPeople | IPlanets | IStarShips>()
  const [isLoading,setLoading] = useState(true)
  const [isError,setError] = useState(false)
  const [actualPage,setPage] = useState(1)


  const getData = async (search?:string) => {
    setLoading(true)
    try {
      const dataList = await getCategoryList({category: category as CategoryType, search})
      setData(dataList)
      setLoading(false)
    } catch (error) {
      setError(!!error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if(!category || ![ 'people' , 'starships' , 'planets'].includes(category)) return
    setLoading(true)
    getData()
    setPage(1)
    setError(false)
  }, [category]);

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading]);

  const getNextPage = async (directUrl:string | null) => {
    if(!directUrl) return
    setLoading(true)
    try {
      const dataList = await getCategoryList({category: category as CategoryType, directUrl})
      setData(dataList)
      setLoading(false)
      setPage(prevState => ++prevState)
    } catch (error) {
      setError(!!error)
      setLoading(false)
    }
  }

  const getPreviousPage = async (directUrl:string | null) => {
    if(!directUrl) return
    setLoading(true)
    try {
      const dataList = await getCategoryList({category: category as CategoryType, directUrl})
      setData(dataList)
      setLoading(false)
      setPage(prevState => --prevState )
    } catch (error) {
      setError(!!error)
      setLoading(false)
    }
  }

  const noItems = data?.count === 0

  return (
    <div className={'flex flex-col gap-4 items-center'}>
      <h1>{category}</h1>
      <SearchBar getCategoryByName={getData}/>
      {isLoading && <Loader/>}
      {!isLoading && data && !noItems && (
        <Paginate itemCount={data.count} getNextPage={getNextPage} getPreviousPage={getPreviousPage} nextUrl={data.next} previousUrl={data.previous} actualPage={actualPage}>
          <ListCategoriesItem categoryList={data.results}/>
        </Paginate>
      )}
      {!isLoading && noItems && (
        <div className={'flex flex-col gap-2 py-4'}>
          <h2>No se encontraron los datos</h2>
          <button className={'flex items-center w-fit rounded-md justify-center bg-transparent ring-2 ring-light-space'}>Recargar categoria</button>
        </div>
      )}
      {isError && (
        <div className={'flex flex-col gap-2 py-4'}>
          <h2>Ha ocurrido un error haciendo la consulta.</h2>
        </div>
      )}
    </div>
  );
};

export default Category;