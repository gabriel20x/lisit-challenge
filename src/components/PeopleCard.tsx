import {Person} from "../types";

type PeopleCardProps = {
  person: Person
}

const PeopleCard = (props:PeopleCardProps) => {
  const {person} = props
  return (
    <article className={'border-light-space border-2 px-2 py-4 rounded-md font-sans flex flex-col w-[18rem] cursor-pointer hover:bg-light-space hover:bg-opacity-30'}>
      <h4 className={'text-2xl font-bold text-center'}>{person.name}</h4>
      <p>Genero: {person.gender}</p>
      <p>Año de nacimiento: {person.birth_year}</p>
      <p>Altura: {person.height}</p>
    </article>
  );
};

export default PeopleCard;