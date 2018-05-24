import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchStarWarsPeople } from "../actions"

// TODO: People List could be a pop-out side nav-bar or just a view when you click 'PEOPLE' in the header
class PeopleList extends Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    this.props.fetchStarWarsPeople()
    // TODO: fetch people from SWAPI
  }

  renderPeople() {
    // TODO: render a link to each person.
  }

  render() {
    console.log(this.props)
    // TODO: render DOM that will contain an element that calls renderPeople().
    return(
      <div>
        <div className="text-xs-right">
        </div>
        <h3 className='text-white text-center py-2'>People</h3>
        <ul className="list-group text-center">
        {/* TODO: below should call renderPeople() to render each person */}
          <div className='text-white'>
            <li className="py-1">  Person </li>
            <li className="py-1">  Person </li>
            <li className="py-1">  Person </li>
            <li className="py-1">  Person </li>
            <li className="py-1">  Person </li>
          </div>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
// TODO:
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchStarWarsPeople}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
