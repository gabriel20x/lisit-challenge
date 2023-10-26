import {Person} from "../types";

type PeopleCardProps = {
  person: Person
}

const PeopleDetail = (props:PeopleCardProps) => {
  const {person} = props

  if(!person) return null

  return (
    <article className={'border-light-space border-2 px-2 py-4 font-sans text-2xl rounded-md flex flex-col max-w-[50vw]'}>
      <h2 className={'text-3xl font-bold text-center'}>{person.name}</h2>
      <div className={'grid grid-cols-2 gap-5 pt-4'}>
        <p>Genero: {person.gender}</p>
        <p>Año de nacimiento: {person.birth_year}</p>
        <p>Color de iris: {person.eye_color}</p>
        <p>Color de cabello: {person.hair_color}</p>
        <p>Altura: {person.height}</p>
        <p>Peso: {person.mass}</p>
        <a href={person.homeworld} className={'text-blue-300'} target={'_blank'} rel="noreferrer"> Hogar </a>
        {person.films?.length > 0 && (
          <div className={'flex gap-2'}>
            Peliculas:
            {person.films.map(( film, index ) => {
              return <a key={`${film}-${index}`} href={film} className={'text-blue-300'} target={'_blank'} rel="noreferrer"> {index + 1} </a>
            })}
          </div>
        )}
        {person.species?.length > 0 && (
          <div className={'flex gap-2'}>
            Especie:
            {person.species.map(( specie, index ) => {
              return <a key={`${specie}-${index}`} href={specie} className={'text-blue-300'} target={'_blank'} rel="noreferrer"> {index + 1} </a>
            })}
          </div>
        )}
        {person.starships?.length > 0 && (
          <div className={'flex gap-2'}>
            Naves:
            {person.starships.map(( starship, index ) => {
              return <a key={`${starship}-${index}`} href={starship} className={'text-blue-300'} target={'_blank'} rel="noreferrer"> {index + 1} </a>
            })}
          </div>
        )}
        {person.vehicles?.length > 0 && (
          <div className={'flex gap-2'}>
            vehiculos:
            {person.vehicles.map(( vehicle, index ) => {
              return <a key={`${vehicle}-${index}`} href={vehicle} className={'text-blue-300'} target={'_blank'} rel="noreferrer"> {index + 1} </a>
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default PeopleDetail;