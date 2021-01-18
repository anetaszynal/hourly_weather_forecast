import React, { useEffect } from 'react'
import { useWeather } from '../../useWeather'
import { WeatherTile } from '../WeatherTile'
import { LineChart } from './LineChart'
import { ChartsWrapper, List, ListItem, PressureChartsWrapper } from './styled'
import { getFallFromWeather } from '../../lib/utils'
import { Slider } from '../Slider'

export const WeatherList = () => {
  const { fetchWeather, weather } = useWeather()

  useEffect(() => {
    if (fetchWeather && !weather) {
      fetchWeather()
    }
  }, [fetchWeather, weather])

  if (!weather) {
    return 'Loading'
  }

  const weatherLength = weather.length

  return (
      <Slider weatherLength={weatherLength}>
        <List>
          {
            weather.map((item, index) => (
              <ListItem key = {index}>
                <WeatherTile hour = {item.dt}
                             id = {index}
                             icon = {item.weather[0].icon}
                             fall = {getFallFromWeather(item)}
                             weather={weather}
                             windInfo = {{
                               degree: item.wind_deg,
                               speed: item.wind_speed,
                             }}
                             pressure = {weather[index].pressure}/>
              </ListItem>
            ))
          }
        </List>
        <ChartsWrapper>
          <LineChart space={60} height={100} feature={'temp'} color={"#ffd200"} symbol={"°"} weather = {weather}/>
        </ChartsWrapper>
        <PressureChartsWrapper>
          <LineChart space={40} height={80} symbol={" hPa"} color={"#000000"} feature={'pressure'} weather={weather}/>
        </PressureChartsWrapper>
      </Slider>
  )
}
