import React from 'react';
import {Link, useParams} from "react-router-dom";
import PeopleCard from "./PeopleCard";
import {Person, Planet, StarShip} from "../types";
import StartShipCard from "./StarShipCard";
import PlanetCard from "./PlanetCard";
import {getCategoryItemId} from "../utils";

type ListCategoriesItemProps = {
  categoryList: Person[] | Planet[] | StarShip[]
}

const ListCategoriesItem = (props :ListCategoriesItemProps) => {
  const {categoryList} = props
  const {category} = useParams()

  return (<>
      {
          categoryList.map((categoryItem, index) => {
          return (
            <Link key={categoryItem.name} to={`/${category}/${getCategoryItemId(categoryItem.url)}`}>
              {category === 'people' && <PeopleCard person={categoryItem as Person}/>}
              {category === 'starships' && <StartShipCard startship={categoryItem as StarShip}/>}
              {category === 'planets' && <PlanetCard planet={categoryItem as Planet}/>}
            </Link>
          )})
      }
    </>)

};

export default ListCategoriesItem;