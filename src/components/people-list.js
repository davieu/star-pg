import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchStarWarsPeople, fetchAllStarWarsPeople } from "../actions"

// TODO: People List could be a pop-out side nav-bar or just a view when you click 'PEOPLE' in the header
class PeopleList extends Component {
  constructor(props) {
    super(props)
    console.log("People List props");
    console.log(props);
    this.props.fetchAllStarWarsPeople()
    this.state = props
    this.page = 1

  }

  componentWillMount() {
    //this.props.fetchAllStarWarsPeople();
  }

  componentDidMount() {
    //this.props.fetchAllStarWarsPeople()
  }

  nextPage() {
    if(this.page<9){
      this.page++
      this.state.fetchStarWarsPeople(this.page)
    }

    // TODO: fetch people from SWAPI
  }

  previousPage() {
    console.log('SUCCESS')
    const request = axios.get(`https://www.googleapis.com/customsearch/v1?cx=014853649748397840475:echk55sah1u&key=AIzaSyAUzOTVv4IQrpjKymg_aWMsxQBudJDomqY&fileType=jpg&q=female ewok athlete`)
      .then(function (response) {
        console.log(response);
      })
  
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
    if(this.props.people.length<this.props.people.count){
        return (
          <div>
            <div className="text-xs-right">
            </div>
            <h3 className='text-yellow text-center py-2'>People</h3>
            <div className="text-white">Loading...</div>
          </div>
        )
    }

    //render DOM that contains an element that calls renderPeople().
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

function mapStateToProps(store) {
  return {people: store.people};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchStarWarsPeople, fetchAllStarWarsPeople}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
