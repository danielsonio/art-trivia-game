import React from 'react';
import { Meteor } from 'meteor/meteor';

import GamesList from './GamesList';
import Header from './Header';
import AddLink from './AddLink';


export default () => {
  return (
    <div>
      <Header title="Here is a links page"/>
      <GamesList/>
      <AddLink/>
    </div>
  );
}