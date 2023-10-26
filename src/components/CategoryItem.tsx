import {FunctionComponent, SVGProps} from "react";
import {Link, useLocation} from "react-router-dom";

type CategoryItemProps = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  categoryName: string
  path: string
}

const CategoryItem = (props:CategoryItemProps) => {
  const {Icon, categoryName, path} = props
  const {pathname} = useLocation()

  const isInitialPage = pathname === '/'
  return (
    <Link to={path} className={`${isInitialPage ? 'min-w-[9.375rem]' : ''} transition-all duration-500 flex gap-4 flex-col items-center cursor-pointer justify-center hover:scale-110 p-2 rounded-lg hover:bg-light-space hover:bg-opacity-20`}>
      <Icon className={`${isInitialPage ? 'w-20 h-20' : 'w-10 h-10'} transition-all duration-500`}/>
      {isInitialPage && (
        <h2>{categoryName}</h2>
      )}
    </Link>
  );
};

export default CategoryItem;