import React, { useReducer } from 'react';
import { removeFeature } from '../actions'
import AddedFeature from './AddedFeature';
import { carReducer, initialState } from '../reducers';

const AddedFeatures = () => {

  const [state, dispatch] = useReducer(carReducer, initialState)

  const removeItem = (e, item) => {
    e.preventDefault()
    dispatch(removeFeature(item))
    localStorage.setItem('state', JSON.stringify(state))
  }

  return (
    <div className="content">
      <h6>Added features:</h6>
      {state.car.features.length ? (
        <ol type="1">
          {state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeItem={e => removeItem(e, item)}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
