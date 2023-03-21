const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'Name',
    placeholder: 'Name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  number: {
    type: 'tel',
    name: 'number',
    required: true,
    label: 'Number',
    placeholder: '+X(XXX)XXX-XX-XX',
    pattern: '[+][1-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};

export default fields;
