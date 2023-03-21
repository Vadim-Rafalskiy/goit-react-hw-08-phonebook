import TextField from '../../../shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';

import useForm from '../../../shared/hooks/useForm';

import initialState from './initialState';
import fields from './fields';

import styles from './PhoneBookForm.module.scss';

const PhoneBookForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { name, number } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={number} handleChange={handleChange} {...fields.number} />
      <Button>Add contact</Button>
    </form>
  );
};

export default PhoneBookForm;
