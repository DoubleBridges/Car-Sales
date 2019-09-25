import React, { useReducer } from 'react';
import { carReducer, initialState } from '../reducers';

const Total = () => {

  const [state] = useReducer(carReducer, initialState)

  return (
    <div className="content">
      <h4>Total Amount: ${state.car.price + state.additionalPrice}</h4>
    </div>
  );
}

export default Total;
