import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Games extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h1>Here is a games page</h1>
        <p>Here are some games that you might play.</p>
        <br/>
        <button onClick={this.onLogout.bind(this)}>LOGOUT</button>
      </div>
    )
  }
}
