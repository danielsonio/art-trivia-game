import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';


import Home from "../ui/Home";
import Signup from "../ui/Signup";
import Login from "../ui/Login";
import Games from "../ui/Games";
import NotFound from "../ui/NotFound";



const authenticatedPages = ['/games'];
const unauthenticatedPages = ['/login', '/signup', '/'];

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

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  
    if (isAuthenticated && isUnauthenticatedPage) {
      browserHistory.replace('/games');
    } else if (!isAuthenticated && isAuthenticatedPage) {
      browserHistory.replace('/login');
    }
}

export const routes = (
  <Router history={browserHistory}>
    <Route path="/login" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/games" component={Games} onEnter={onEnterPrivatePage}/>
    <Route path="/" component={Home} onEnter={onEnterPublicPage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);