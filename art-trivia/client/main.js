import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import Home from "../imports/ui/Home";
import Signup from "../imports/ui/Signup";
import Login from "../imports/ui/Login";
import Games from "../imports/ui/Games";
import NotFound from "../imports/ui/NotFound";

const authenticatedPages = ['/', '/games'];
const unauthenticatedPages = ['/login', '/signup'];

const onEnterPublicPage = () => {
  if(Meteor.userId()) {
    browserHistory.replace('/games')
  }
}
const onEnterPrivatePage = () => {
  if(!Meteor.userId()) {
    browserHistory.replace('/login')
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/login" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/games" component={Games} onEnter={onEnterPrivatePage}/>
    <Route path="/" component={Home}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);

  if (isAuthenticated && isUnauthenticatedPage) {
    browserHistory.replace('/games');
  } else if (!isAuthenticated && isAuthenticatedPage) {
    browserHistory.replace('/login');
  }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'))
});
