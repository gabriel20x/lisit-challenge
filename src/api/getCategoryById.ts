import Api from './index'
import {Person, Planet, StarShip} from "../types";
import axios from "axios";

type GetCategoryByIdProps = {
  category: 'people' | 'starships' | 'planets',
  id: string,
  directUrl?: string,
}

export const getCategoryById = async (props : GetCategoryByIdProps) => {
  const {category, directUrl, id} = props
  if(directUrl) {
    const {  pathname} = new URL(directUrl)
    const response = await axios.get<undefined, { data: Person | Planet | StarShip }>(pathname)
    return response.data
  }
  const response = await Api.get<undefined,{ data: Person | Planet | StarShip }>(`${category}/${id}`)
  return response.data

}