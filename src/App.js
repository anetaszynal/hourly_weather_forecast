import React from 'react'
import { WeatherList } from './components/WeatherList'
import { StatusText, WidgetWrapper } from './styled'
import { LegendList } from './components/LegendList'
import { useWeather } from './useWeather'
import { Form } from './components/Form'
import { API_RESPONSE_STATUS } from './lib/consts'

function App () {
  const { city, fetchWeather, responseStatus, weather, getCityName } = useWeather()

  const onFormSubmit = (event) => {
    event.preventDefault()
    fetchWeather()
  }
  const displayStatusText = () => {
    if (responseStatus === API_RESPONSE_STATUS.loading) {
      return <StatusText>{'Proszę czekać... Trwa ładowanie danych.'}</StatusText>
    }
    else if (responseStatus === API_RESPONSE_STATUS.error) {
      return <StatusText>{'Przepraszamy! Niestety nie udało się pobrać danych. Proszę spróbować później.'}</StatusText>
    }
    else if (responseStatus === API_RESPONSE_STATUS.initial) {
      return <StatusText>{'Proszę wprowadzić nazwę miejscowości.'}</StatusText>
    }
    else if (responseStatus === API_RESPONSE_STATUS.success) {
      return (
        <WeatherList weather = {weather}/>
      )
    }
  }

  return (
    <>
      <Form getCityName = {getCityName} onFormSubmit = {onFormSubmit} city = {city}/>
      <WidgetWrapper>
        <LegendList/>
        {displayStatusText()}
      </WidgetWrapper>
    </>
  )
}

export default App
