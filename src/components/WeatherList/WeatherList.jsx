import React from 'react'
import { WeatherTile } from '../WeatherTile'
import { LineChart } from './LineChart'
import { Slider } from '../Slider'
import { ChartsWrapper, List, ListItem, PressureChartsWrapper } from './styled'
import { getFallFromWeather } from '../../lib/utils'

export const WeatherList = ({ weather }) => (
  <Slider weatherLength = {weather.length}>
    <List>
      {
        weather.map((item, index) => (
          <ListItem key = {index}>
            <WeatherTile hour = {item.dt}
                         id = {index}
                         icon = {item.weather[0].icon}
                         fall = {getFallFromWeather(item)}
                         weather = {weather}
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
      <LineChart space = {60} height = {100} feature = {'temp'} color = {'#ffd200'} symbol = {'°'} weather = {weather}/>
    </ChartsWrapper>
    <PressureChartsWrapper>
      <LineChart space = {40}
                 height = {80}
                 symbol = {' hPa'}
                 color = {'#000000'}
                 feature = {'pressure'}
                 weather = {weather}/>
    </PressureChartsWrapper>
  </Slider>
)
