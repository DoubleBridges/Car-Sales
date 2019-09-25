import React, { useContext } from 'react';
import { CarContext } from '../contexts/carContext'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  const state = useContext(CarContext)

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.store.length ? (
        <ol type="1">
          {state.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={e => props.addItem(e, item)}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
