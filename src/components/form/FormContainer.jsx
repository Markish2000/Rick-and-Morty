import React, { useState } from 'react';
import style from './style/Form.module.css';

const FormContainer = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    setForm({ ...form, name: nameValue });
  };

  const lastNameChangeHandler = (event) => {
    const lastNameValue = event.target.value;
    setForm({ ...form, lastName: lastNameValue });
  };

  const emailChangeHandler = (event) => {
    const emailValue = event.target.value;
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setError('Password inválido');
    } else {
      setError('');
    }
    setForm({ ...form, email: emailValue });
  };

  const passwordChangeHandler = (event) => {
    const passwordValue = event.target.value;
    setForm({ ...form, password: passwordValue });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <h4 className={style.form__h4}>Registration</h4>
      <input
        onChange={nameChangeHandler}
        className={style.form__input}
        type='text'
        placeholder='Enter your name'
      />
      <input
        onChange={lastNameChangeHandler}
        className={style.form__input}
        type='text'
        placeholder='Enter your last name'
      />
      <input
        onChange={emailChangeHandler}
        className={style.form__input}
        type='email'
        placeholder='Enter your e-mail'
      />
      <input
        onChange={passwordChangeHandler}
        className={style.form__input}
        type='password'
        placeholder='Enter your password'
      />
      <input className={style.form__input} type='checkbox' />
      <p className={style.form__p}>I agree to the terms and conditions</p>
      <button type='submit'>SEND</button>
    </form>
  );
};
export default FormContainer;
