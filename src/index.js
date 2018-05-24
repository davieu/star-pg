import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import promise from "redux-promise";
import reducers from "./reducers";

import PeopleList from './components/people-list';
import PersonShow from './components/person-show';
import CharacterList from './components/character-list';
import CharacterShow from './components/character-show';

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



const Header = () => (
  <div>
    <header className="App-header">
      <div className = "row">

    <Link to={`/peopleList`}>
      <h2 className = "header-option px-3">People</h2>
    </Link>
    <Link to={`/characterList`}>
      <h2 className = "header-option px-3">Characters</h2>
    </Link>
    <div className="text-center">
      <h2 className ="text-white"> Star P G </h2>
      <p className ="text-white"> by Hew, Ilona, & Davis </p>
    </div>
      </div>
    </header>
  </div>
)

const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/peopleList/person' component={PersonShow}/>
      <Route exact path='/peopleList/person' component={CharacterShow}/>
    </Switch>
)

const SideNav = () => (
  <div className="side-nav bg-dark pt-1">
  <Switch>
    <Route exact path='/peopleList' component={PeopleList}/>
    <Route exact path='/characterList' component={CharacterList}/>
  </Switch>

  </div>
)

const Home = () => (
  <div> Home </div>
)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Main />
        <SideNav />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
