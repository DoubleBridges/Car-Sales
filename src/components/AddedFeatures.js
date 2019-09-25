import React, { useContext } from 'react';
import { CarContext } from '../contexts/carContext'
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  const state = useContext(CarContext)

  return (
    <div className="content">
      <h6>Added features:</h6>
      {state.car.features.length ? (
        <ol type="1">
          {state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeItem={e => props.removeItem(e, item)}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
