import { Planet} from "../types";
import {Link} from "react-router-dom";
import {getCategoryItemId} from "../utils";

type PlanetDetailProps = {
  planet: Planet
}

const PlanetDetail = (props:PlanetDetailProps) => {
  const {planet} = props

  if(!planet) return null

  return (
    <article className={'border-light-space border-2 px-2 py-4 font-sans text-2xl rounded-md flex flex-col max-w-[65vw]'}>
      <h2 className={'text-3xl font-bold text-center'}>{planet.name}</h2>
      <div className={'grid grid-cols-2 gap-5 pt-4'}>
        <p>Diametro: {planet.diameter}</p>
        <p>Periodo de rotación: {planet.rotation_period}</p>
        <p>Gravedad: {planet.gravity}</p>
        <p>Población: {planet.population}</p>
        <p>Clima: {planet.climate}</p>
        <p>Terreno: {planet.terrain}</p>
        <p>Porcentaje de Agua: {planet.surface_water}%</p>
        {planet.residents?.length > 0 && (
          <div className={'flex gap-2'}>
            Residentes:
            {planet.residents.map(( resident, index ) => {
              return <Link key={`${resident}-${index}`} to={`/people/${getCategoryItemId(resident)}`} className={'text-blue-300'}> {index + 1} </Link>
            })}
          </div>
        )}
        {planet.films?.length > 0 && (
          <div className={'flex gap-2'}>
            Peliculas:
            {planet.films.map(( film, index ) => {
              return <a key={`${film}-${index}`} href={film} className={'text-blue-300'} target={'_blank'} rel="noreferrer"> {index + 1} </a>
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default PlanetDetail;