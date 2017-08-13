import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  SaveButton,
  Toolbar,
  RichTextInput,
  DateInput,
  NumberInput,
  BooleanInput,
} from 'admin-on-rest';

const requiredFields = [
  'last_name',
  'first_name',

  'gender',
  'identification',
  'birthday',
  'email',
  'cell_phone_number',
  'home_phone_number',

  'postcode',
  'city',
  'zone',
  'address',
  'contact_last_name',
  'contact_first_name',
  'contact_cell_phone_number',
];

const validateMember = (values) => {
  const errors = {};
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = ['必填'];
    }
  });

  return errors;
};

const MemberCreateToolbar = props => <Toolbar {...props} >
  <SaveButton label="儲存並瀏覽" redirect="show" submitOnEnter={true} />
  <SaveButton label="儲存" redirect={false} submitOnEnter={false} raised={false} />
</Toolbar>;

const MemberCreate = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm
      toolbar={<MemberCreateToolbar />}
      validate={validateMember}
    >
      <TextInput label="姓氏" source="last_name" />
      <TextInput label="名字" source="first_name" />

      <TextInput label="性別" source="gender" />
      <TextInput label="身分證" source="identification" />
      <DateInput label="生日" source="birthday" />
      <TextInput label="信箱" source="email" />
      <TextInput label="手機號碼" source="cell_phone_number" />
      <TextInput label="電話號碼" source="home_phone_number" />

      <TextInput label="郵遞區號" source="postcode" />
      <TextInput label="縣市" source="city" />
      <TextInput label="鄉鎮市區" source="zone" />
      <TextInput label="地址" source="address" />
      <TextInput label="聯絡人：姓氏" source="contact_last_name" />
      <TextInput label="聯絡人：名字" source="contact_first_name" />
      <TextInput label="聯絡人：手機號碼" source="contact_cell_phone_number" />
    </SimpleForm>
  </Create>
);

export default MemberCreate;
