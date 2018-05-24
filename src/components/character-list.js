import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// TODO: Character List could be a pop-out side nav-bar or just a view when you click 'PEOPLE' in the header
class CharacterList extends Component {
  constructor(props) {
    super()

  }

  componentDidMount() {
    // TODO: fetch character names from localStorage
  }

  renderCharacters() {
    // TODO: render a link to each person.
  }

  render() {
    // TODO: render DOM that will contain an element that calls renderCharacters().
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/addCharacter">
            Build New Character
          </Link>
        </div>
        <h3 className='text-white text-center py-2'>Characters</h3>
        <ul className="list-group text-center">
        {/* TODO: below should call renderCharacters() to render each person */}
          <div className='text-white'>
            <li className="py-1">  Character </li>
            <li className="py-1">  Character </li>
            <li className="py-1">  Character </li>
            <li className="py-1">  Character </li>
          </div>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
// TODO:
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({/* TODO: */ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
