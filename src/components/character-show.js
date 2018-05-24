// TODO: renders character clicked, or default character when character-list is rendered

import _ from "lodash";
import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class PersonShow extends Component {
  constructor(props) {
    super()

  }

  componentDidMount() {
    // TODO: fetch particular character details from localStorage/ also, default render last character accessed
  }


  render() {
    // TODO: render person details
    return
  }
}

function mapStateToProps(state) {
// TODO:
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({/* TODO: */ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonShow);
