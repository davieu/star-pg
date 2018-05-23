import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// TODO: People List could be a pop-out side nav-bar or just a view when you click 'PEOPLE' in the header
class PeopleList extends Component {
  constructor(props) {
    super()

  }

  componentDidMount() {
    // TODO: fetch people from SWAPI
  }

  renderPeople() {
    // TODO: render a link to each person.
  }

  render() {
    return (
      // TODO: render DOM that will contain an element that calls renderPeople().
    );
  }
}

function mapStateToProps(state) {
// TODO: 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({/* TODO: */ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
