import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchCharacters } from "../actions"

// TODO: Character List could be a pop-out side nav-bar or just a view when you click 'PEOPLE' in the header
class CharacterList extends Component {
  constructor(props) {
    super(props)
    console.log(props)

  }

  componentDidMount() {
    this.props.fetchCharacters()
  }

  renderCharacters() {
    return _.map(this.props.people, person => {

      return (
        <li className="list-group-item bg-dark" key={1}>
          <Link className="text-white" to={`/characterList/1`}>
            {person.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    console.log(this.props)
    // TODO: render DOM that will contain an element that calls renderCharacters().
    return(
      <div>
      <div className="text-xs-right">
        <Link className="btn btn-primary" to="/addCharacter">
          Build New Character
        </Link>
      </div>
        <h3 className='text-yellow text-center py-2'>Characters</h3>
        <ul className="list-group text-center">
          {this.renderCharacters()}

        </ul>

        <div className="bottom-padding">

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {people: state.people};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCharacters}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
