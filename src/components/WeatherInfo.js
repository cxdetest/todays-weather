import React from 'react';
import Container from './Container';
import Styles from './Styles.module.css';

const WeatherInfo = ({ weather }) => {
  return (
    <Container>
      <h2>{weather?.location.name}</h2>
      <section>{weather?.location.country}</section>
      <section className={Styles.info}>
        <img
          src={`http://${weather?.current.condition.icon}`}
          alt={weather?.current.condition.text}
          width='128'
        />
        <section>{weather?.current.condition.text}</section>
        <h2>{weather?.current.temp_c}°</h2>
      </section>

      {/* Google maps */}
      <iframe
        title='map'
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d635.3380860710531!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1665670363956!5m2!1ses-419!2sec`}
        width='300'
        height='300'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </Container>
  );
};

export default WeatherInfo;
