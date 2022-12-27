import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createCharacter } from '../../redux/actions';

const FormCreateCharacter = (props) => {
  const [form, setForm] = useState({
    name: '',
    status: '',
    specie: '',
    gender: '',
    origin: '',
    location: '',
    id: 65141,
    image: '',
  });

  const formHandleChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    setForm({ ...form, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCharacter({
      form,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter your name'
        name='name'
        value={form.name}
        onChange={formHandleChange}
      />
      <input
        type='text'
        placeholder='Enter your status'
        name='status'
        value={form.status}
        onChange={formHandleChange}
      />
      <input
        type='text'
        placeholder='Enter your specie'
        name='specie'
        value={form.specie}
        onChange={formHandleChange}
      />
      <input
        type='text'
        placeholder='Enter your gender'
        name='gender'
        value={form.gender}
        onChange={formHandleChange}
      />
      <input
        type='text'
        placeholder='Enter your origin'
        name='origin'
        value={form.origin}
        onChange={formHandleChange}
      />
      <input
        type='text'
        placeholder='Enter your location'
        name='location'
        value={form.location}
        onChange={formHandleChange}
      />
      <button type='submit'>SEND</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCharacter: (character) => {
      dispatch(createCharacter(character));
    },
  };
};

export default connect(null, mapDispatchToProps)(FormCreateCharacter);
