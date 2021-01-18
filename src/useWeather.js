import { useState } from 'react';
import Axios from 'axios';
import { API_RESPONSE_STATUS } from './lib/consts';
import { ENVS } from './lib/envs';

export const useWeather = () => {
  const [weather, setWeather] = useState();
  const [responseStatus, setResponseStatus] = useState(API_RESPONSE_STATUS.initial);

  const fetchWeather = async () => {
    try {
      setResponseStatus(API_RESPONSE_STATUS.loading);
      const { data, status, statusText } = await Axios.get(
        `http://api.openweathermap.org/data/2.5/onecall?lat=50.06&lon=19.94&lang=pl&units=metric&exclude=current,minutely,daily,alerts&appid=${ENVS.WEATHER_API_KEY}`,
      );

      if (status !== 200) {
        throw new Error(statusText)
      }

      setWeather(data.hourly);
      setResponseStatus(API_RESPONSE_STATUS.success);
    } catch (error) {
      console.error(error);
      setResponseStatus(API_RESPONSE_STATUS.error);
      setWeather(undefined);
    }
  };
  return {
    weather,
    responseStatus,
    fetchWeather,
  };
};
