import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';

import './App.css';
import client from './client';
import MemberList from './Association/Members';

const restClient = client('http://api.loho.dev/api');

class App extends Component {
  render() {
    return (
      <Admin restClient={restClient}>
        <Resource name="members" list={MemberList} />
      </Admin>
    );
  }
}

export default App;
