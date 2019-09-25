import React, { useReducer } from 'react';
import AdditionalFeature from './AdditionalFeature';
import { buyItem } from '../actions'
import { carReducer, initialState } from '../reducers'


const AdditionalFeatures = props => {

  const [state, dispatch] = useReducer(carReducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault()
    dispatch(buyItem(item))
  }

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.store.length ? (
        <ol type="1">
          {state.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={e => addItem(e, item)}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};



export default AdditionalFeatures;
