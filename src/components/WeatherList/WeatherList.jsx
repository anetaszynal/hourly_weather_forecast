import React, { useEffect } from 'react'
import { useWeather } from '../../useWeather'
import { WeatherTile } from '../WeatherTile'
import { LineLabelChart } from './LineChart'
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

  return (
      <Slider>
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
          <LineLabelChart space={60} fontSize={"18px"} height={100} feature={'temp'} color={"#ffd200"} symbol={"°"} weather = {weather}/>
        </ChartsWrapper>
        <PressureChartsWrapper>
          <LineLabelChart space={40} fontSize={"11px"} height={80} symbol={" hPa"} color={"#000000"} feature={'pressure'} weather={weather}/>
        </PressureChartsWrapper>
      </Slider>
  )
}
