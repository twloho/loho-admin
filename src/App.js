import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';

import './App.css';
import restClient from './aor-jsonapi-client/src/restClient';
import MemberList from './Association/MemberList';

const client = restClient('http://api.loho.dev/api');

class App extends Component {
  render() {
    return (
      <Admin title="LOHO" restClient={client}>
        <Resource name="members" options={{ label: '會員清單' }} list={MemberList} />
      </Admin>
    );
  }
}

export default App;
