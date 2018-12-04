# Ada Pet Rescue

## At a Glance

- Individual, [stage 1](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md#stage-1) project
- To be completed in class, **DATE**. No pull request is required.

## Learning Goals

This project is designed to exercise the following skills:

- Reading and understanding a substantial amount of existing React code
- Lifting React state from a child component to a parent component
- Event handling in React across several levels of nested components

## Introduction

Ada Lovelace is starting a pet rescue service advertising pets in need of rescue online.  This App should load the list of pets automatically and present a list of pets with thumbnail images.  The user should be able to select a pet and see details, add new pets and remove a pet from the App once adopted.

### Setup

1. Fork and clone this repository
2. run `npm install` to install dependencies
3. run `npm start` to start the dev server

## Requirements

Each of the waves includes a number of questions. Though you should write your own code, feel free to collaborate with other students as you work on these questions.

### Wave 0: Reading

We have already implemented some parts of this application:

- Code to load JSON pet data in `App.js`
- 3 functional stateless components: `PetList`, `PetCard` and `PetDetails`
- CSS for all components. You shouldn't need to write any CSS for this project.
  - All of our CSS uses [BEM naming](http://getbem.com/naming/)

Before you start writing code, read through what's already here and make sure you understand it by answering the following questions:

- How do the components relate to each other? Draw a diagram.
- How does data get from `App.js` to `PetCard.js`?

### Wave 1: Viewing Details

When the user clicks the `select` button the app should present the user with additional details on the selected pet.

**Questions:**
- How will you track which, if any Pet is the currently selected Pet?  Which component will keep the state?
- Will you need to switch a functional component to a classical component?
- What event should you listen for?
- Draw a diagram of the flow of rendering and callbacks in your app so far, similar to the one we drew in class.

### Wave 2: Removing Pets

When the user clicks the `X` button on a PetCard, that animal should be removed from the application, including if that animal is the currently selected pet.

### Wave 3:  Filtering the list

Add a component called `SearchBar`, this component should consist of an input and when the user types in the input field, the list of pets should be filtered to pets whose `about`, `species` or `name` fields match the text in the input.  

**Questions**

- Should this component be a functional stateless component or a class component?
- Which component should track the filtered list of pets?  

### Wave 4: Adding Pets

Add a component to the application called `NewPetForm` to add a new Pet.  This should be a controlled form.  New pets should not be added unless they have a name, an image link and a species.  

**Questions:** (same as for wave 2)
- How will a new pet information arrive in a PetCard component?  
- Will the new component be a functional stateless component or a class component.
- Draw a diagram of the flow of rendering and callbacks in your app so far, similar to the one we drew in class.

### Optional Enhancements

Don't even read this list until you've completed the core requirements.

- Notice that each pet in the application can have multiple images, add functionality to switch between images.  
- Add functionality to change the pet order.  
