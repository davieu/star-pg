// TODO: add component that adds character
import _ from "lodash";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";


import { fetchSpecies, fetchAllSpecies, fetchPlanets, fetchAllPlanets, fetchStarships, fetchAllStarships, fetchVehicles, fetchAllVehicles, fetchOccupations, fetchWeapons, emptyOptions, submitCharacter, saveCharacter } from "../actions";

const CHARACTERS_ID = 'star-pgCharacters';



class AddCharacter extends Component {

  constructor(props) {
    super(props);
    let characters = JSON.parse(localStorage.getItem(CHARACTERS_ID) || '[]')
    console.log(characters)
    console.log(characters.length)
    console.log(characters[0])
    let id = 1;
    if (characters.length>0) {
      console.log(characters[0].id)
      id = (characters[0].id)+1;
    } else {
      id = 1;
    }

    this.state = {
      name: '',
      options: [],
      current_option: '',
      id: id,
      species: '',
      homePlanet: '',
      vehicle: '',
      starship: '',
      weapon: '',
      occupation: '',
      gender: '',
      eye_color: '',
      stats: {}
    }

  }
//add the contact by executing a function
  submitCharacter = () => {
    this.props.emptyOptions()
    console.log(this.props)
    this.props.submitCharacter(this.state)
    this.props.history.push('/characterList')
  }

  viewSpecies = () => {
    this.props.emptyOptions()
    this.props.fetchAllSpecies();
    this.setState({current_option : 'species'})
  }

  viewPlanets = () => {
    this.props.emptyOptions()
    this.props.fetchAllPlanets()
    this.setState({current_option : 'homePlanet'})
  }

  viewVehicles = () => {
    this.props.emptyOptions()
    this.props.fetchAllVehicles()
    this.state.current_option = 'vehicle'
  }

  viewStarships = () => {
    this.props.emptyOptions()
    this.props.fetchAllStarships()
    this.state.current_option = 'starship'
  }

  viewWeapons = () => {
    this.props.emptyOptions()
    this.props.fetchWeapons()
    this.state.current_option = 'weapon'
  }

  viewOccupations = () => {
    this.props.emptyOptions()
    this.props.fetchOccupations()
    this.state.current_option = 'occupation'
  }

  optionsHandler = (e) => {
    let current_option = (this.state.current_option)


    // let stateAttr =this.props.options.find(function(element) {
    //   return element.name == e.target.value
    // });
    let stateAttr = (this.props.options[e.target.value])


    this.setState({[current_option]: stateAttr})

  }

  render() {

    return(
      <div className = "container box-center py-3 my-3 border border-dark bg-dark">
        <div className="row">

          <div className="col-sm-3">




            <button onClick={this.viewSpecies}
            className={(!this.state.species) ? 'btn mx-1 ':'btn-secondary btn mx-1 '}
            > Species </button>
            <p className="mx-1 text-yellow">{this.state.species.name}</p>

            <button onClick={this.viewPlanets}
            className={(!this.state.homePlanet) ? 'btn mx-1 ':'btn-secondary btn mx-1 '}
            > Planet </button>
            <p className="mx-1 text-yellow">{this.state.homePlanet.name}</p>

            <button onClick={this.viewVehicles}
            className={(!this.state.vehicle) ? 'btn mx-1 ':'btn-secondary btn mx-1 '}
            > Vehicle </button>
            <p className="mx-1 text-yellow">{this.state.vehicle.name}</p>

            <button onClick={this.viewStarships}
            className={(!this.state.starship.name) ? 'btn mx-1 ':'btn-secondary btn mx-1 '}
            > Starship </button>
            <p className="mx-1 text-yellow">{this.state.starship.name}</p>

            <button onClick={this.viewWeapons}
            className={(!this.state.weapon.name) ? 'btn mx-1 ':'btn-secondary btn mx-1 '}
            > Weapon </button>
            <p className="mx-1 text-yellow">{this.state.weapon.name}</p>


            <button onClick={this.viewOccupations}
            className={(!this.state.occupation.name) ? 'btn mx-1 ':'btn-secondary btn mx-1 '}
            > Occupation </button>
            <p className="mx-1 text-yellow">{this.state.occupation.name}</p>



          </div>
          <div className="col-sm-6">
            <h5 className="text-yellow">Choose a name for your character</h5>
            <input className="form-group input-group"
            value={this.state.name}
            onChange={event => {
              let name = event.target.value;
              //filter out all non-letter characters
              name = name.replace(/[\W\d\s\._\-]+/g, "");
              this.setState({name: name})
            }}
            placeholder="name"/>

            <h5 className="text-yellow">Choose a gender for your character</h5>
            <input className="form-group input-group"
            value={this.state.gender}
            onChange={event => {
              let gender = event.target.value;
              //filter out all non-letter characters
              gender = gender.replace(/[\W\d\s\._\-]+/g, "");
              this.setState({gender: gender})
            }}
            placeholder="gender"/>

            <h5 className="text-yellow">Choose an eye color for your character</h5>
            <input className="form-group input-group"
            value={this.state.species.eye_color}
            onChange={event => {
              let eye_color = event.target.value;
              //filter out all non-letter characters
              eye_color = eye_color.replace(/[\W\d\s\._\-]+/g, "");
              this.setState({eye_color: eye_color})
            }}
            placeholder={this.state.species.eye_colors}/>

            <p className="text-yellow">expected colors for species: {this.state.species.eye_colors}</p>

          </div>
          <div className="col-sm-3">
            <button onClick={this.submitCharacter}
            className="btn bottom"> Submit Character </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h5 className="text-yellow text-center">Please choose your {this.state.current_option}</h5>
            <div className="row">
              <OptionsList optionsHandler = {this.optionsHandler} options={this.props.options} state={this.state}/>
            </div>
          </div>
        </div>

        <div>

        </div>

      </div>
    )
  }
}

class OptionsList extends Component {

  render(){

    if (!this.props.options){
      return(
        <div className="text-yellow"> Loading... </div>
      )
    }
    return _.map(this.props.options, option => {

      let stateAttribute = this.props.state[this.props.state.current_option].name

      return (

          <div className="m-1">

            <button
            className ={(stateAttribute == option.name) ? 'btn-warning':''}
            onClick ={this.props.optionsHandler}
            value={option.id}>{option.name}</button>
          </div>

      );
    });
  }

}

// export default AddCharacter
function mapStateToProps(state) {
  return {options: state.options,
          people: state.people};
}

function mapDispatchToProps(dispatch) {


  return bindActionCreators({fetchSpecies, fetchAllSpecies, fetchPlanets, fetchAllPlanets, fetchVehicles, fetchAllVehicles, fetchStarships, fetchAllStarships, fetchWeapons, fetchOccupations, emptyOptions, submitCharacter, saveCharacter}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(AddCharacter);
