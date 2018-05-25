import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchStarWarsPeople } from "../actions"

// TODO: People List could be a pop-out side nav-bar or just a view when you click 'PEOPLE' in the header
class PeopleList extends Component {
  constructor(props) {
    super(props)
    this.state = props
    this.page = 1
  }

  componentDidMount() {
    this.props.fetchStarWarsPeople(1)
  }

  nextPage() {
    if(this.page<9){
      this.page++
      this.state.fetchStarWarsPeople(this.page)
    }

    // TODO: fetch people from SWAPI
  }

  previousPage() {
    if(this.page>1){
      this.page--
      this.state.fetchStarWarsPeople(this.page)
    }

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
  }

  render() {
    console.log(this.props.people.length)
    console.log(this.props.people.count)

    if(this.props.people.length<87){
      // console.log('next')
      // console.log(this.props.people)
      this.nextPage()
    }

    // TODO: render DOM that will contain an element that calls renderPeople().
    return(
      <div>
        <div className="text-xs-right">
        </div>
        <h3 className='text-yellow text-center py-2'>People</h3>
        <ul className="list-group text-center">
          {this.renderPeople()}

        </ul>
        <div className="container">
          <div className="row">
            <button onClick={this.previousPage.bind(this)} className="left btn">Previous</button>
            <button onClick={this.nextPage.bind(this)} className="right btn">Next</button>
          </div>
        </div>
        <div className="bottom-padding">
        .
        </div>
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
