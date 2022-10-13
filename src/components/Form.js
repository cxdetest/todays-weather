import React, { useState } from 'react';
import Container from './Container';
import Styles from './Styles.module.css';

const Form = ({ newCity }) => {
  const [city, setCity] = useState('');

  function handleForm(e) {
    e.preventDefault();
    newCity(city);
  }

  function searchCity(e) {
    if (e.target.value !== '') {
      setCity(e.target.value);
    }
  }

  return (
    <Container>
      <form onSubmit={handleForm}>
        <input
          type='text'
          className={Styles.input}
          onChange={searchCity}
          maxLength='50'
          placeholder='city'
        />
      </form>
    </Container>
  );
};

export default Form;
