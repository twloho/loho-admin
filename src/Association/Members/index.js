import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export default (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="serial_number" />
      <TextField source="type" />
      <TextField source="last_name" />
      <TextField source="first_name" />

      <TextField source="gender" />
      <TextField source="identification" />
      <TextField source="birthday" />
      <TextField source="email" />
      <TextField source="home_phone_number" />
      <TextField source="cell_phone_number" />

      <TextField source="postcode" />
      <TextField source="city" />
      <TextField source="zone" />
      <TextField source="address" />
      <TextField source="contact_last_name" />
      <TextField source="contact_first_name" />
      <TextField source="contact_cell_phone_number" />
      <TextField source="cell_phone_number" />
      <TextField source="home_phone_number" />
      <TextField source="cell_phone_number" />
      <TextField source="home_phone_number" />
      <TextField source="cell_phone_number" />
    </Datagrid>
  </List>
);