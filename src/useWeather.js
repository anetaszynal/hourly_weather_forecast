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
          `http://api.positionstack.com/v1/forward?access_key=${ENVS.GEOLOCATION_API_KEY}&query=${city}`
        )
        const cityLatitude = cityKeyResponse.data.data[0].latitude
        const cityLongitude = cityKeyResponse.data.data[0].longitude
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
    city,
    weather,
    responseStatus,
    fetchWeather,
    getCityName
  }
}

