// TODO: this component will contain all of the information of a person and render that information. Example, when Luke Skywalker is clicked on people-list.js, this component will render all of his information. It will also contain data from the Google API for images relating to the information about the person. Such as: picure of Luke, picture of his vehicles, picture of his home planet.

import _ from "lodash";
import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchStarWarsPerson } from "../actions" //TODO: make sure this is the right function name

class PersonShow extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchStarWarsPerson(this.props.match.params.id);
  }


  render() {

    // TODO: render person details
    return(
      <div className="text-center"> A PERSON </div>
    )
  }
}

function mapStateToProps(state) {
// TODO:
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({/* TODO: */ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonShow);
