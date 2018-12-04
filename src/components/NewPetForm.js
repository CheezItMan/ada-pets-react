import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: '',
      location: '',
      name: '',
      species: '',
      image: '',
    };
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    
    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    this.props.addPetCallback(this.state);
    this.setState({
      about: '',
      location: '',
      name: '',
      species: '',
    });

  }

  render() {
    return (
      <form onSubmit={this.onSubmit} name="new-pet-form" id="new-pet-form" className="new-pet-form">
        <div>
          <label className="new-pet-form--label" htmlFor="Name">Name</label>
          <input name="name" placeholder="name" onChange={this.onFormChange} />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="species">Species</label>
          <input name="species" placeholder="species" onChange={this.onFormChange} />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="location">Location</label>
          <input name="location" placeholder="location" onChange={this.onFormChange} />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="location">Image</label>
          <input name="image" placeholder="image link" onChange={this.onFormChange} />
        </div>

        <div>
          <label className="new-pet-form--label" htmlFor="about">About</label>
        </div>
        <div>
          <textarea className="new-pet-form-about" name="about" onChange={this.onFormChange}></textarea>
        </div>
        <input className="btn btn-success new-pet-form-submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;