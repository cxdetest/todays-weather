import React, { useEffect, useState } from 'react';
import Container from './Container';
import Form from './Form';
import Loading from './Loading';
import WeatherInfo from './WeatherInfo';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  //default weather information loading
  useEffect(() => {
    loadingInfo();
  }, []);

  //state-dependent weather information
  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`;
  }, [weather]);

  async function loadingInfo(city = 'new york') {
    try {
      let req = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      if (req.ok) {
        let res = await req.json();
        //console.log(res)
        setWeather(res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function newCity(city) {
    setWeather(null);
    loadingInfo(city);
  }

  return (
    <Container>
      <Form newCity={newCity} />
      {weather ? <WeatherInfo weather={weather} /> : <Loading />}
    </Container>
  );
};

export default Weather;
