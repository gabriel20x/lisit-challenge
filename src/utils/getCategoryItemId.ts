export const getCategoryItemId = (url:string) => {
  return url.split('/').splice(-2).shift()
}