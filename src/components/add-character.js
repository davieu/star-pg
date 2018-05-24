// TODO: add component that adds character
import _ from "lodash";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { addCharacter } from "../actions";


class AddCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      species: '',
      homePlanet: '',
      vehicles: '',
      starships: '',
    }

  }
//add the contact by executing a function
  addNewCharacter = () => {

  }

  render() {
    return(
      <div> test </div>
    )
  }
}

export default AddCharacter
// function mapStateToProps(state) {
//   return {options: state.options};
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchSpecies, fetchPlanets}, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
