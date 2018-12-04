import React from 'react';
import PropTypes from 'prop-types';


import speciesEmoji from '../speciesEmoji';

import './PetDetails.css';

const PetDetails = (props) => {
  console.log(props);
  const { name, location, about, species, images } = props.currentPet;
  return (
    <section className="pet-details">
      <h2 className="pet-name">{speciesEmoji(species)} {name} {speciesEmoji(species)}</h2>
      <img src={images[0]} alt={`${name}`} className="pet-details--image" />
      <article>
        <h3>About {name}</h3>
        <p>
          {about}
        </p>
      </article>
      <footer className="text-muted pet-location">
        {location}
      </footer>
    </section>
  )
}

PetDetails.propTypes = {
  currentPet: PropTypes.shape({
    about: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }),
}
export default PetDetails;