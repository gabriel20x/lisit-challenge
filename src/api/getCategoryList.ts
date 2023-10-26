import Api from './index'
import {IPeople, IPlanets, IStarShips} from "../types";
import axios from "axios";

type GetCategoryListProps = {
  category: 'people' | 'starships' | 'planets',
  page?: string,
  directUrl?: string,
  search?:string
}

export const getCategoryList = async (props : GetCategoryListProps)  => {
  const {category, directUrl, search} = props
  if(directUrl) {
    const response = await axios.get<undefined, { data: IPeople | IPlanets | IStarShips }>(directUrl)
    return response.data
  }
  const response = await Api.get<undefined, { data: IPeople | IPlanets | IStarShips }>(category,{params:{
    search
    }})
  return response.data
}