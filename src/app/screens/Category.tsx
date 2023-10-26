import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategoryList} from "../../api/getCategoryList";
import {Person, Planet, StartShip} from "../../types";
import PeopleCard from "../../components/PeopleCard";
import StartShipCard from "../../components/StarShipCard";
import PlanetCard from "../../components/PlanetCard";

type CategoryType =  'people' | 'starships' | 'planets'

const Category = () => {
  const {category} = useParams()
  const [data,setData] = useState<Person[] | Planet[] | StartShip[]>([])
  const [isLoading,setLoading] = useState<boolean>(true)
  const [isError,setError] = useState<boolean>(false)

  const getData = async () => {
    try {
      setLoading(true)
      const dataList = await getCategoryList({category: category as CategoryType})
      setData(dataList.results)
    } catch (e) {

    }
  }

  useEffect(() => {
    if(!category || ![ 'people' , 'starships' , 'planets'].includes(category)) return
    getData()
  }, [category]);

  useEffect(() => {
    if(data) {
      setLoading(false)
    }
  }, [data]);

  return (
    <div className={'flex flex-col gap-4 items-center'}>
      <h1>{category}</h1>
      <section className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
        {!isLoading && (
          data.map((categoryItem) => {
            if(category === 'people') return <PeopleCard person={categoryItem as Person}/>
            if(category === 'starships') return <StartShipCard startship={categoryItem as StartShip}/>
            if(category === 'planets') return <PlanetCard planet={categoryItem as Planet}/>
            return <div>{categoryItem.name}</div>
          })
        )}
      </section>
      {isError && (
        <h1>Ha ocurrido un error haciendo la consulta.</h1>
      )}
    </div>
  );
};

export default Category;