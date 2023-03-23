import BasicButtons from 'shared/components/BasicButtons/BasicButtons';
import TextFieldMui from 'shared/components/TextFieldMui/TextFieldMui';

import useForm from '../../../shared/hooks/useForm';

import initialState from './initialState';
import fields from './fields';

import styles from './PhoneBookForm.module.scss';

const PhoneBookForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { name, number } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextFieldMui value={name} handleChange={handleChange} {...fields.name} />
      <TextFieldMui value={number} handleChange={handleChange} {...fields.number} />
      <BasicButtons>Add contact</BasicButtons>
    </form>
  );
};

export default PhoneBookForm;
