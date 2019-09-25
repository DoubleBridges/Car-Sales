import React, { useReducer } from 'react';
import { carReducer, initialState } from '../reducers';


const Header = () => {

  const [state] = useReducer(carReducer, initialState)

  return (
    <>
      <figure className="image is-128x128">
        <img src={state.car.image} alt={state.car.name} />
      </figure>
      <h2>{state.car.name}</h2>
      <p>Amount: ${state.car.price}</p>
    </>
  );
};

export default Header;
