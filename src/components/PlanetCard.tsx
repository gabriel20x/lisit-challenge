import { Planet} from "../types";

type PeopleCardProps = {
  planet: Planet
}

const PlanetCard = (props:PeopleCardProps) => {
  const {planet} = props
  return (
    <article className={'border-light-space border-2 px-2 py-4 rounded-md font-sans flex flex-col w-[18rem] cursor-pointer hover:bg-light-space hover:bg-opacity-30'}>
      <h4 className={'font-sjRegular text-center'}>{planet.name}</h4>
      <p>Clima: {planet.climate}</p>
      <p>Poblacion: {planet.population}</p>
      <p>Diametro: {planet.diameter}</p>
    </article>
  );
};

export default PlanetCard;