import {StarShip} from "../types";

type StarShipDetailProps = {
  startship: StarShip
}

const StartShipDetail = (props:StarShipDetailProps) => {
  const {startship} = props
  return (
    <article className={'border-light-space border-2 px-2 py-4 font-sans text-2xl rounded-md flex flex-col max-w-[50vw]'}>
      <h2 className={'text-3xl font-bold text-center'}>{startship.name}</h2>
      <div className={'grid grid-cols-2 gap-5 pt-4'}>
        <p>Modelo: {startship.model}</p>
        <p>Clase: {startship.starship_class}</p>
        <p>Fabricador: {startship.manufacturer}</p>
        <p>Costo: {startship.cost_in_credits}</p>
        <p>N° de tripulación: {startship.crew}</p>
        <p>Cantidad de pasajeros: {startship.passengers}</p>
        <p>Velocidad en Atmosfera: {startship.max_atmosphering_speed}</p>
        <p>Hypervelocidad: {startship.hyperdrive_rating}</p>
        <p>MGLT: {startship.MGLT}</p>
        <p>Capacidad de carga: {startship.cargo_capacity}</p>
        {startship.films?.length > 0 && (
          <div className={'flex gap-2'}>
            Peliculas:
            {startship.films.map(( film, index ) => {
              return <a key={`${film}-${index}`} href={film} className={'text-blue-300'} target={'_blank'} rel="noreferrer"> {index + 1} </a>
            })}
          </div>
        )}
        {startship.pilots?.length > 0 && (
          <div className={'flex gap-2'}>
            Pilotos:
            {startship.pilots.map(( pilot, index ) => {
              return <a key={`${pilot}-${index}`} href={pilot} className={'text-blue-300'} target={'_blank'} rel="noreferrer"> {index + 1} </a>
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default StartShipDetail;