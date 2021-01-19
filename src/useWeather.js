import { useState } from 'react'
import Axios from 'axios'
import { API_RESPONSE_STATUS } from './lib/consts'
import { ENVS } from './lib/envs'

export const useWeather = () => {
  const [weather, setWeather] = useState()
  const [responseStatus, setResponseStatus] = useState(API_RESPONSE_STATUS.initial)
  const [city, setCity] = useState()
  const getCityName = ({ target }) => setCity(target.value)

  const fetchWeather = async () => {
    if (city) {
      try {
        setResponseStatus(API_RESPONSE_STATUS.loading)
        const cityKeyResponse = await Axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${ENVS.GEOLOCATION_API_KEY}`
        )
        const cityLatitude = cityKeyResponse.data.results[0].geometry.lat
        const cityLongitude = cityKeyResponse.data.results[0].geometry.lng
        const { data, status, statusText } = await Axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLatitude}&lon=${cityLongitude}&lang=pl&units=metric&exclude=current,minutely,daily,alerts&appid=${ENVS.WEATHER_API_KEY}`,
        )
        if (status !== 200) {
          throw new Error(statusText)
        }
        setWeather(data.hourly)
        setResponseStatus(API_RESPONSE_STATUS.success)
      } catch (error) {
        console.error(error)
        setResponseStatus(API_RESPONSE_STATUS.error)
        setWeather(undefined)
      }
    }
  }
  return {
    weather,
    responseStatus,
    fetchWeather,
    getCityName
  }
}

