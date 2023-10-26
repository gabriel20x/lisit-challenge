import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Person, Planet, StarShip} from "../../types";
import {getCategoryById} from "../../api/getCategoryById";
import PeopleDetail from "../../components/PeopleDetail";
import PeopleCard from "../../components/PeopleCard";
import StartShipCard from "../../components/StarShipCard";
import PlanetCard from "../../components/PlanetCard";
import PlanetDetail from "../../components/PlanetDetail";
import StartShipDetail from "../../components/StarShipDetail";

type CategoryType =  'people' | 'starships' | 'planets'

const CategoryItemDetail = () => {
  const {category,id} = useParams()
  const [dataById,setData] = useState<Person | Planet | StarShip>()
  const [isLoading,setLoading] = useState<boolean>(true)
  const [isError,setError] = useState<boolean>(false)

  const navigate = useNavigate()

  const getDataById = async () => {
    console.log(!id || isNaN(parseInt(id)))
    if(!id || isNaN(parseInt(id))) return
    try {
      setLoading(true)
      const data = await getCategoryById({category: category as CategoryType, id})
      setData(data)
      setLoading(false)
    } catch (error) {
      setError(!!error)
    }
  }

  useEffect(() => {
    setData(undefined)
    getDataById()
  }, [id]);

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <h3 onClick={goBack} className={'cursor-pointer ml-10'}>Regresar</h3>
      <div className={'flex flex-wrap gap-4 py-5 items-center justify-center w-full'}>
        {!isLoading && dataById && (
          <>
            {category === 'people' && <PeopleDetail person={dataById as Person}/>}
            {category === 'starships' && <StartShipDetail startship={dataById as StarShip}/>}
            {category === 'planets' && <PlanetDetail planet={dataById as Planet}/>}
          </>
        )}
      </div>
    </>
  );
};

export default CategoryItemDetail;