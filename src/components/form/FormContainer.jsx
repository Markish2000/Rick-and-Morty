import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style/Form.module.css';

const FormContainer = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    checkBox: 'Invalid check',
  });

  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    if (form.name.length < 3) {
      setError({ ...error, name: 'Invalid name' });
    } else {
      setError({ ...error, name: null });
    }
    setForm({ ...form, name: nameValue });
  };

  const lastNameChangeHandler = (event) => {
    const lastNameValue = event.target.value;
    if (form.lastName.length <= 3) {
      setError({ ...error, lastName: 'Invalid last Name' });
    } else {
      setError({ ...error, lastName: null });
    }
    setForm({ ...form, lastName: lastNameValue });
  };

  const emailChangeHandler = (event) => {
    const emailValue = event.target.value;
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setError({ ...error, email: 'Invalid email' });
    } else {
      setError({ ...error, email: null });
    }
    setForm({ ...form, email: emailValue });
  };

  const passwordChangeHandler = (event) => {
    const passwordValue = event.target.value;
    if (form.password.length < 7) {
      setError({ ...error, password: 'Invalid password' });
    } else {
      setError({ ...error, password: null });
    }
    setForm({ ...form, password: passwordValue });
  };

  const checkBoxChangeHandler = (event) => {
    const checkBoxValue = event.target.checked;
    if (checkBoxValue === false) {
      setError({ ...error, checkBox: 'Invalid check' });
    } else {
      setError({ ...error, checkBox: null });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <h4 className={style.form__h4}>Register to enter</h4>
      <input
        onChange={nameChangeHandler}
        className={
          error.name === ''
            ? style.form__input
            : error.name === null
            ? style.form__input__validate
            : style.form__input__error
        }
        type='text'
        placeholder='Enter your name'
      />
      <input
        onChange={lastNameChangeHandler}
        className={
          error.lastName === ''
            ? style.form__input
            : error.lastName === null
            ? style.form__input__validate
            : style.form__input__error
        }
        type='text'
        placeholder='Enter your last name'
      />
      <input
        onChange={emailChangeHandler}
        className={
          error.email === ''
            ? style.form__input
            : error.email === null
            ? style.form__input__validate
            : style.form__input__error
        }
        type='email'
        placeholder='Enter your e-mail'
      />
      <input
        onChange={passwordChangeHandler}
        className={
          error.password === ''
            ? style.form__input
            : error.password === null
            ? style.form__input__validate
            : style.form__input__error
        }
        type='password'
        placeholder='Enter your password'
      />
      <div className='flex'>
        <input
          onChange={checkBoxChangeHandler}
          className={style.form__input__checkbox}
          type='checkbox'
        />
        <p className={style.form__p}>I agree to the terms and conditions</p>
      </div>
      <Link to='/'>
        {' '}
        <button
          className={style.form__button}
          type='submit'
          disabled={
            error.name !== null ||
            error.lastName !== null ||
            error.email !== null ||
            error.password !== null ||
            error.checkBox !== null
          }
        >
          SEND
        </button>
      </Link>
    </form>
  );
};
export default FormContainer;
