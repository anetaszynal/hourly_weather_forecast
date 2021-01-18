import React from 'react'
import { FallChart } from './FallChart'
import { Wind } from './Wind'
import {
  Day,
  HourTime,
  PressureWrapper,
  TemperatureWrapper,
  TileWrapper,
  WeatherIcon,
} from './styled'

export const WeatherTile = ({ hour, icon, fall, weather, windInfo, id }) => {
  const getHourFromUnixTimestamp = unixTimestamp => new Date(unixTimestamp * 1000).getHours()
  const getDayFromUnixTimestamp = unixTimestamp => new Date(unixTimestamp * 1000).getDay()
  const getDayName = () => {
    switch (getDayFromUnixTimestamp(hour)) {
      case 1:
        return 'poniedziałek';
      case 2:
        return 'wtorek'
      case 3:
        return 'środa'
      case 4:
        return 'czwartek'
      case 5:
        return 'piątek'
      case 6:
        return 'sobota'
      case 7:
        return 'niedziela'
      default: return '';
    }
  }

  return(
    <>
      <Day border={getHourFromUnixTimestamp(hour) === 0}>{getHourFromUnixTimestamp(hour) === 0 ? id < 24 ? 'jutro' : `${getDayName()}` : ''}</Day>
      <TileWrapper>
        <HourTime>{getHourFromUnixTimestamp(hour).toString().length === 1 ? `0${getHourFromUnixTimestamp(hour)}:00` : `${getHourFromUnixTimestamp(hour)}:00`}</HourTime>
        <WeatherIcon src = {require(`./icons/${icon}.png`).default} alt = "weather icon"/>
        <TemperatureWrapper/>
        <FallChart weather={weather} fall={fall}/>
        <Wind windInfo={windInfo} id={id}/>
        <PressureWrapper/>
      </TileWrapper>
    </>
  )}
