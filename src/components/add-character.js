// TODO: add component that adds character
import _ from "lodash";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSpecies, fetchPlanets, fetchStarships, fetchVehicles } from "../actions";


class AddCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      current_option: '',
      id: '',
      species: 'Species',
      homePlanet: 'Planets',
      vehicle: 'Vehicles',
      starship: 'StarShips',
      weapon: 'Weapons',
      occupation: 'Occupations',
      gender: 'Gender',
      eye_color: 'Eye Color',
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

  optionsHandler = (e) => {
    let current_option = (this.state.current_option)

    this.setState({[current_option]: e.target.value})
  }

  render() {

    console.log('RE-RENDERED')
    console.log(this.props)
    // console.log(this.state.species)
    return(
      <div className = "container box-center py-3 my-3 border border-dark text-center">
        <div className="row">

        <button onClick={this.viewSpecies}
        className="btn m-1"> {this.state.species} </button>

        <button onClick={this.viewPlanets}
        className="btn m-1"> {this.state.homePlanet} </button>

        <button onClick={this.viewVehicles}
        className="btn m-1"> {this.state.vehicle} </button>

        <button onClick={this.viewStarships}
        className="btn m-1"> {this.state.starShip} </button>

        <button className="btn m-1"> {this.state.vehicle} </button>
        <button className="btn m-1"> {this.state.starship} </button>
        <button className="btn m-1"> {this.state.weapon} </button>
        <button className="btn m-1"> {this.state.occupation} </button>
        <button className="btn m-1"> {this.state.gender} </button>
        <button className="btn m-1"> {this.state.eye_color} </button>
        </div>

        <div>
          <OptionsList optionsHandler = {this.optionsHandler} options={this.props.options.results}/>
        </div>

      </div>
    )
  }
}

class OptionsList extends Component {
  render(){
    console.log('list tick')
    console.log(this.props)
    // console.log(this.props)
    if (!this.props.options){
      return(
        <div> none </div>
      )
    }
    return _.map(this.props.options, option => {
      // console.log(option)
      return (

          <div>
            <button
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
  return bindActionCreators({fetchSpecies, fetchPlanets, fetchVehicles, fetchStarships}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCharacter);
