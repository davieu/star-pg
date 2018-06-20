// TODO: renders character clicked, or default character when character-list is rendered

import _ from "lodash";
import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CharacterShow extends Component {
  constructor(props) {
    super()
    console.log(props)
    console.log(props.people[1])
  }

  componentDidMount() {
    // TODO: fetch particular character details from localStorage/ also, default render last character accessed
  }


  render() {
    console.log(this.props)
    // TODO: render person details
    return(
      <div> Loading ... </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.people)
  return {people: state.people};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({/* TODO: */ }, dispatch);
}

export default connect(mapStateToProps)(CharacterShow);
