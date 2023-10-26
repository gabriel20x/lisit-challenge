type PaginateProps = {
  nextUrl: string | null
  previousUrl: string | null
  actualPage: number
  getNextPage: (url:string | null) => void
  getPreviousPage: (url:string | null) => void
}

const Paginate = (props:PaginateProps) => {
  const {nextUrl, previousUrl, getNextPage, getPreviousPage} = props
  return (
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
  );
};

export default Paginate;