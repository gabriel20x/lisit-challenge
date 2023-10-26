import Api from './index'

type GetCategoryListProps = {
  category: 'people' | 'starships' | 'planets',
  page?: string,
  directUrl?: string,
  search?:string
}

export const getCategoryList = (props : GetCategoryListProps)  => {
  const {category, page, directUrl, search} = props
  if(directUrl) return Api[category]
  return Api[category]
}