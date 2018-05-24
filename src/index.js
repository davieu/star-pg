import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import promise from "redux-promise";
import reducers from "./reducers";

import PeopleList from './components/people-list';
import personShow from './components/person-show';

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



const Header = () => (
  <div>
    <header className="App-header">
      <div className = "row">

    <Link to={`/peopleList`}>
      <p className = "header-option px-3">People</p>
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
      <Route exact path='/peopleList' component={PeopleList}/>
      <Route exact path='/peopleList/person' component={personShow}/>

    </Switch>
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
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
