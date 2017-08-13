import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  QuickFilter,
} from 'admin-on-rest';

const PostFilter = ({ ...props }) => (
  <Filter {...props}>
    <TextInput label="編號" source="serial_number" />
    <TextInput label="姓氏" source="last_name" />
    <TextInput label="名字" source="first_name" />

    <TextInput label="身分證" source="identification" />
    <TextInput label="信箱" source="email" />
    <TextInput label="手機號碼" source="cell_phone_number" />
    <TextInput label="電話號碼" source="home_phone_number" />
  </Filter>
);

export default (props) => (
  <List title={props.options.label} filters={<PostFilter />} {...props}>
    <Datagrid>
      <TextField label="編號" source="serial_number" />
      <TextField label="狀態" source="status" />
      <TextField label="姓氏" source="last_name" />
      <TextField label="名字" source="first_name" />

      <TextField label="性別" source="gender" />
      <TextField label="身分證" source="identification" />
      <TextField label="生日" source="birthday" />
      <TextField label="信箱" source="email" />
      <TextField label="手機號碼" source="cell_phone_number" />
      <TextField label="電話號碼" source="home_phone_number" />

      <TextField label="郵遞區號" source="postcode" />
      <TextField label="縣市" source="city" />
      <TextField label="鄉鎮市區" source="zone" />
      <TextField label="地址" source="address" />
      <TextField label="聯絡人：姓氏" source="contact_last_name" />
      <TextField label="聯絡人：名字" source="contact_first_name" />
      <TextField label="聯絡人：手機號碼" source="contact_cell_phone_number" />
    </Datagrid>
  </List>
);
