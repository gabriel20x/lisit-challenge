import {StartShip} from "../types";

type StartShipCardProps = {
  startship: StartShip
}

const StartShipCard = (props:StartShipCardProps) => {
  const {startship} = props
  return (
    <article className={'border-light-space border-2 px-2 py-4 rounded-md font-sans flex flex-col w-[18rem] cursor-pointer hover:bg-light-space hover:bg-opacity-30'}>
      <h4 className={'font-sjRegular text-center'}>{startship.name}</h4>
      <p>Capacidad de carga: {startship.cargo_capacity}</p>
      <p>Capacidad de pasajeros: {startship.passengers}</p>
      <p>Costo: {startship.cost_in_credits}</p>
    </article>
  );
};

export default StartShipCard;