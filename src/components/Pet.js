import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Pet.css';

import speciesEmoji from '../speciesEmoji';


const Pet = (props) => {
  const { id, name, species, about, location } = props;
  return (
    <div className="card">

      <section className="card-header">
      <button 
        onClick={() => props.deletePetCallback(props.id)}
        type="button" 
        className="close pet-card-close-btn" 
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      { speciesEmoji(species) } {id} - {name} 
        <button 
          onClick={() => {props.selectPetCallback(props.id)}} 
          className="btn btn-primary select-pet-btn"
          >
            Select
        </button>
      </section>
      <section className="card-body">
        { about.length > 128 ? `${about.substring(0, 128)}...` : about}
      </section>
      <section className="card-footer text-muted">
        {location}
      </section>
    </div>
  );
};
    
Pet.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired, 
  species: PropTypes.string.isRequired, 
  about: PropTypes.string, 
  location: PropTypes.string,
  deletePetCallback: PropTypes.func.isRequired,
  selectPetCallback: PropTypes.func.isRequired,
}
    
export default Pet;