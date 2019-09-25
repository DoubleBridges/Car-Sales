import React, { useReducer } from 'react';
import { carReducer, initialState } from './reducers'
import { buyItem, removeFeature } from './actions'
import { CarContext } from './contexts/carContext'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = () => {

  const [state, dispatch] = useReducer(carReducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault()
    dispatch(buyItem(item))
    localStorage.setItem('state', JSON.stringify(state))
  }

  const removeItem = (e, item) => {
    e.preventDefault()
    dispatch(removeFeature(item))
    localStorage.setItem('state', JSON.stringify(state))
  }

  return (
    <CarContext.Provider value={state}>
      <div className="boxes">
        <div className="box">
          <Header  />
          <AddedFeatures
            removeItem={removeItem}
          />
        </div>
        <div className="box">
          <AdditionalFeatures
            addItem={addItem}
          />
          <Total  />
        </div>
      </div>
    </CarContext.Provider>
  );
};

export default App;
