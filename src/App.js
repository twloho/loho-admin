import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';

import './App.css';
import restClient from './aor-jsonapi-client/src/restClient';
import MemberList from './Association/MemberList';
import MemberCreate from './Association/MemberCreate';

const client = restClient('http://api.loho.dev/api');

class App extends Component {
  render() {
    return (
      <Admin title="LOHO" restClient={client}>
        <Resource
          name="members"
          options={{ label: '會員清單' }}
          list={MemberList}
          create={MemberCreate}
        />
      </Admin>
    );
  }
}

export default App;
