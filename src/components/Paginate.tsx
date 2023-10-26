import {PropsWithChildren} from "react";
import ListCategoriesItem from "./ListCategoriesItem";

type PaginateProps = {
  nextUrl: string | null
  previousUrl: string | null
  actualPage: number
  itemCount: number
  getNextPage: (url:string | null) => void
  getPreviousPage: (url:string | null) => void
}

const ITEMS_BY_PAGE = 10

const Paginate = (props:PropsWithChildren<PaginateProps>) => {
  const {nextUrl, previousUrl, getNextPage, getPreviousPage, itemCount, children, actualPage} = props

  const Paginate = itemCount > 10

  const firstItem = ((actualPage - 1) * ITEMS_BY_PAGE) + 1
  const lastItem = (actualPage * ITEMS_BY_PAGE)

  return (
    <>
      {Paginate && (
        <div className={'flex gap-6 items-center'}>
          <h3 onClick={() => getPreviousPage(previousUrl)} className={`${previousUrl ? 'cursor-pointer' : 'pointer-events-none opacity-50 cursor-default'}`}>
            <span className={'font-sans'}>{'<- '}</span>
            Anterior
          </h3>

          <h3 onClick={() => getNextPage(nextUrl)} className={`${nextUrl ? 'cursor-pointer' : 'pointer-events-none opacity-50 cursor-default' }`}>
            Siguiente
            <span className={'font-sans'}>{' ->'}</span>
          </h3>
        </div>
      )}
      <section className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative'}>
        {children}
        {Paginate && (
          <span className={'absolute -bottom-10 right-0'}>{firstItem} - {(lastItem > itemCount )? itemCount : lastItem } / {itemCount}</span>
        )}
      </section>


    </>
  );
};

export default Paginate;