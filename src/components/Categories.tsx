import {ReactComponent as Characters} from 'assets/characters.svg'
import {ReactComponent as Starships} from 'assets/starships.svg'
import {ReactComponent as Planets} from 'assets/planets.svg'
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className={'flex gap-6 w-full justify-around'}>
      <CategoryItem categoryName={'Personas'} Icon={Characters} path={'/people'}/>
      <CategoryItem categoryName={'Naves'} Icon={Starships} path={'/starships'}/>
      <CategoryItem categoryName={'Planetas'} Icon={Planets} path={'/planets'}/>
    </div>
  );
};

export default Categories;