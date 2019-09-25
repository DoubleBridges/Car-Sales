import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../actions'
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  const removeItem = (e, item) => {
    e.preventDefault()
    props.removeFeature(item)
  }
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeItem={e => removeItem(e, item)}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP', state)
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeatures);
