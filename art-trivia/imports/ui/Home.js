import React from 'react';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {
  onLoginPush() {
    browserHistory.push('/login');
  }
  render() {
    return (
      <div>
        <h1>Welcome to ArtLingo</h1>
        <h3>A tour of human creativity from cave paintings to skyscrapers</h3>
        <button onClick={ this.onLoginPush.bind(this) }>Login</button>
      </div>
    );
  }
}
