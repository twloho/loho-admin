import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';

import './App.css';
import client from './client';
import MemberList from './Association/Members';

const restClient = client('http://api.loho.dev/api');

class App extends Component {
  render() {
    return (
      <Admin title="LOHO" restClient={restClient}>
        <Resource name="members" options={{ label: '會員清單' }} list={MemberList} />
      </Admin>
    );
  }
}

export default App;
