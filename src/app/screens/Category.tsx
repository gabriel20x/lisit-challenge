import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategoryList} from "../../api/getCategoryList";
import {IPeople, IPlanets, IStarShips, Person, Planet, StarShip} from "../../types";
import PeopleCard from "../../components/PeopleCard";
import StartShipCard from "../../components/StarShipCard";
import PlanetCard from "../../components/PlanetCard";
import Paginate from "../../components/Paginate";
import SearchBar from "../../components/SearchBar";

type CategoryType =  'people' | 'starships' | 'planets'

const ITEMS_BY_PAGE = 10

const Category = () => {
  const {category} = useParams()
  const [data,setData] = useState<IPeople | IPlanets | IStarShips>()
  const [isLoading,setLoading] = useState<boolean>(true)
  const [isError,setError] = useState<boolean>(false)
  const [actualPage,setPage] = useState(1)

  const firstItem = ((actualPage - 1) * ITEMS_BY_PAGE) + 1
  const lastItem = (actualPage * ITEMS_BY_PAGE)

  const getData = async (search?:string) => {
    try {
      setLoading(true)
      const dataList = await getCategoryList({category: category as CategoryType, search})
      setData(dataList)
    } catch (error) {
      setError(!!error)
    }
  }

  useEffect(() => {
    if(!category || ![ 'people' , 'starships' , 'planets'].includes(category)) return
    getData()
    setPage(1)
    setError(false)
  }, [category]);

  useEffect(() => {
    if(data) {
      setLoading(false)
    }
  }, [data]);

  const getNextPage = async (directUrl:string | null) => {
    if(!directUrl) return
    const dataList = await getCategoryList({category: category as CategoryType, directUrl})
    setData(dataList)
    setPage(prevState => ++prevState)
  }

  const getPreviousPage = async (directUrl:string | null) => {
    if(!directUrl) return
    const dataList = await getCategoryList({category: category as CategoryType, directUrl})
    setData(dataList)
    setPage(prevState => --prevState )
  }

  const getCategoryItemId = (url:string) => {
    return url.split('/').splice(-2).shift()
  }

  return (
    <div className={'flex flex-col gap-4 items-center'}>
      <h1>{category}</h1>
      <SearchBar getCategoryByName={getData}/>
      {!isLoading && data && (
        <>
          {data.count > 10 && (
            <Paginate getNextPage={getNextPage} getPreviousPage={getPreviousPage} nextUrl={data.next} previousUrl={data.previous} actualPage={actualPage}/>
          )}
          {data.count === 0 && (
            <div className={'flex flex-col gap-2 py-4'}>
              <h2>No se encontraron los datos</h2>
              <button className={'flex items-center w-fit rounded-md justify-center bg-transparent ring-2 ring-light-space'}>Recargar categoria</button>
            </div>
          )}
          <section className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative'}>
            {
              data.results?.map((categoryItem,index) => {
                return <Link key={categoryItem.name} to={`/${category}/${getCategoryItemId(categoryItem.url)}`}>
                  {category === 'people' && <PeopleCard person={categoryItem as Person}/>}
                  {category === 'starships' && <StartShipCard startship={categoryItem as StarShip}/>}
                  {category === 'planets' && <PlanetCard planet={categoryItem as Planet}/>}
                </Link>
              })
            }
            {data.count > 10 && (
              <span className={'absolute -bottom-10 right-0'}>{firstItem} - {(lastItem > data.count )? data.count : lastItem } / {data.count}</span>
            )}
          </section>
        </>
      )}
      {isError && (
        <h2>Ha ocurrido un error haciendo la consulta.</h2>
      )}
    </div>
  );
};

export default Category;