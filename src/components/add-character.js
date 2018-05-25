// TODO: add component that adds character
import _ from "lodash";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { fetchSpecies, fetchPlanets, fetchStarships, fetchVehicles, fetchWeapons, fetchOccupations } from "../actions";


class AddCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      options: [],
      current_option: '',
      id: '',
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
  addNewCharacter = () => {

  }

  viewSpecies = () => {

    this.props.fetchSpecies()
    this.setState({current_option : 'species'})
  }

  viewPlanets = () => {
    this.props.fetchPlanets()
    console.log('tick')
    this.setState({current_option : 'homePlanet'})
  }

  viewVehicles = () => {

    this.props.fetchVehicles()
    this.state.current_option = 'vehicle'
  }

  viewStarships = () => {
    this.props.fetchStarships()
    this.state.current_option = 'starship'
  }

  viewWeapons = () => {
    this.props.fetchWeapons()
    this.state.current_option = 'weapon'
  }

  viewOccupations = () => {
    this.props.fetchOccupations()
    this.state.current_option = 'occupation'
  }

  optionsHandler = (e) => {
    let current_option = (this.state.current_option)
    console.log(this.props.options.results)
    console.log(e.target.value)
    let stateAttr =this.props.options.results.find(function(element) {
      return element.name == e.target.value
    });

    console.log(stateAttr)

    this.setState({[current_option]: stateAttr})
  }

  render() {

    return(
      <div className = "container box-center py-3 my-3 border border-dark bg-dark">
        <div className="row">

          <div className="col-sm-3">
          {console.log(!this.state.species)}



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
            className={(!this.state.starship) ? 'btn m-1 ':'btn-secondary btn m-1 '}
            > Starship </button>
            <p className="mx-1 text-yellow">{this.state.starship.name}</p>

            <button onClick={this.viewWeapons}
            className={(!this.state.weapon) ? 'btn m-1 ':'btn-secondary btn m-1 '}
            > Weapon </button>
            <p className="mx-1 ">{this.state.weapon}</p>


            <button onClick={this.viewOccupations}
            className={(!this.state.occupation) ? 'btn m-1 ':'btn-secondary btn m-1 '}
            > Occupation </button>
            <p className="text-center text-yellow">{this.state.occupation}</p>

            <button className="btn m-1"> Gender </button>
            <p className="text-center text-yellow">{this.state.gender}</p>


            <button className="btn m-1"> Eye Color </button>
            <p className="mx-1 text-yellow">{this.state.eye_color}</p>

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
            <p className="text-yellow">{this.state.species.eye_colors}</p>

          </div>
          <div className="col-sm-3">
            <button className="btn bottom"> Submit Character </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h5 className="text-yellow text-center">Please choose your {this.state.current_option}</h5>
            <div className="row">
              <OptionsList optionsHandler = {this.optionsHandler} options={this.props.options.results} state={this.state}/>
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
      console.log(this.props.state.current_option)
      let stateAttribute = this.props.state[this.props.state.current_option].name
      return (

          <div className="m-1">

            <button
            className ={(stateAttribute == option.name) ? 'btn-warning':''}
            onClick ={this.props.optionsHandler}
            value={option.name}>{option.name}</button>
          </div>

      );
    });
  }

}

// export default AddCharacter
function mapStateToProps(state) {
  return {options: state.options};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchSpecies, fetchPlanets, fetchVehicles, fetchStarships, fetchWeapons, fetchOccupations}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCharacter);
