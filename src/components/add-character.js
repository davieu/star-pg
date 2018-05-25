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
    console.log('species TICK')
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
    // console.log(this.props)
    // console.log(this.state.species)
    return(
      <div className = "container box-center py-3 my-3 border border-dark bg-dark">
        <div className="row">
          <input className="form-group input-group m-3"
          value={this.state.name}
          onChange={event => {
            let name = event.target.value;
            //filter out all non-letter characters
            name = name.replace(/[\W\d\s\._\-]+/g, "");
            this.setState({name: name})
          }}
          placeholder="name"/>
          <div className="col-sm-2">
          {console.log(!this.state.species)}



            <button onClick={this.viewSpecies}
            className={(!this.state.species) ? 'btn m-1 ':'btn-secondary btn m-1 '}
            > Species </button>
            <p className="text-center text-yellow">{this.state.species}</p>

            <button onClick={this.viewPlanets}
            className={(!this.state.homePlanet) ? 'btn m-1 ':'btn-secondary btn m-1 '}
            > Planet </button>
            <p className="text-center text-yellow">{this.state.homePlanet}</p>

            <button onClick={this.viewVehicles}
            className={(!this.state.vehicle) ? 'btn m-1 ':'btn-secondary btn m-1 '}
            > Vehicle </button>
            <p className="text-center text-yellow">{this.state.vehicle}</p>

            <button onClick={this.viewStarships}
            className={(!this.state.starship) ? 'btn m-1 ':'btn-secondary btn m-1 '}
            > Starship </button>
            <p className="text-center text-yellow">{this.state.starship}</p>

            <button className="btn m-1"> Weapon </button>
            <p className="text-center text-yellow">{this.state.weapon}</p>

            <button className="btn m-1"> Occupation </button>
            <p className="text-center text-yellow">{this.state.occupation}</p>

            <button className="btn m-1"> Gender </button>
            <p className="text-center text-yellow">{this.state.gender}</p>

            <button className="btn m-1"> Eye Color </button>
            <p className="text-center text-yellow">{this.state.eye_color}</p>

          </div>
          <div className="col-sm-10">
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
    // console.log('list tick')
    // console.log(this.props)
    // console.log(this.props)
    if (!this.props.options){
      return(
        <div> none </div>
      )
    }
    return _.map(this.props.options, option => {
      let stateAttribute = this.props.state[this.props.state.current_option]
      return (

          <div>

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
  return bindActionCreators({fetchSpecies, fetchPlanets, fetchVehicles, fetchStarships}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCharacter);
