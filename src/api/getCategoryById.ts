import Api from './index'

type GetCategoryByIdProps = {
  category: 'people' | 'starships' | 'planets',
  id: string,
  directUrl?: string,
}

export const getCategoryById = (props : GetCategoryByIdProps)  => {
  const {category, directUrl, id} = props
  if(directUrl) return Api[category].results[parseInt(id)]
  return Api[category].results[parseInt(id)]
}