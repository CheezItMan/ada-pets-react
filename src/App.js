import React, { Component } from 'react';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);
    const petList = pets.map((pet) => {
      pet.currentPet = 0;
      return pet;
    });

    this.state = {
      petList,
      currentPet: undefined,
    };
  }

  onSelectPet = (petId) => {

    const selectedPet = this.state.petList.find((pet) => {
      return pet.id === petId;
    });
    if (selectedPet) {
      this.setState({
        currentPet: selectedPet,
      });
    }
  }

  onSearchChange = (value) => {
    console.log(value);
    const regex = new RegExp(`${ value }`.toUpperCase());
    const petList = pets.filter((pet) => {
      return regex.test(`${ pet.name }${ pet.about }${ pet.species }`.toUpperCase());
    });

    this.setState({
      petList,
    });
  }

  addPet = (newPet) => {
    newPet.id = pets.reduce((max = 0, currentPet) => max ? Math.max(max, currentPet.id) : currentPet.id) + 1
    pets.push(newPet);
    this.setState({
      petList: pets,
    });
  }

  removePet = (petId) => {
    const pets = this.state.petList.filter((pet) => {
      return pet.id !== petId;
    });

    this.setState({
      petList: pets,
    })
  }
  //  https://prod.liveshare.vsengsaas.visualstudio.com/join?8FF5F6BF2794077563F76BF5FA8C5B00AEB0
  render () {
    const { currentPet } = this.state;

    const details = currentPet ? <PetDetails currentPet={currentPet} /> : '';

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets is My Favoritest!</h1>
        </header>
        <section className="search-bar">
          <SearchBar onSearchChange={this.onSearchChange} />
        </section>
        {details}
        <section className="pet-list">
          <PetList
            selectPetCallback={this.onSelectPet}
            deletePetCallback={this.removePet}
            pets={this.state.petList}
          />
        </section>
        <section>
          <NewPetForm addPetCallback={this.addPet} />
        </section>
      </main>
    );
  }
}

export default App;
