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
    /* renders a list of each person */
    return _.map(this.props.people, person => {
      return (
        <li className="list-group-item bg-dark" key={person.id}>
          <Link className="text-white" to={`/peopleList/${person.id}`}>
            {person.name}
          </Link>
        </li>
      );
    });

    console.log(this.props.people)
  }

  render() {
    console.log(this.props)
    // TODO: render DOM that will contain an element that calls renderPeople().
    return(
      <div>
        <div className="text-xs-right">
        </div>
        <h3 className='text-yellow text-center py-2'>People</h3>
        <ul className="list-group text-center">
          {this.renderPeople()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {people: state.people};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchStarWarsPeople}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
