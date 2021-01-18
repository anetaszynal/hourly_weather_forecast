import React from 'react'
import {
  Bar,
  Day,
  Fall,
  FallWrapper,
  HourTime,
  PressureWrapper,
  TemperatureWrapper,
  TileWrapper,
  WeatherIcon,
  WindDirection,
  WindIcon,
  WindInfo,
  WindPower,
  WindSpeed,
  WindWrapper,
} from './styled'

export const WeatherTile = () => {
  return (
    <>
      <Day/>
      <TileWrapper>
        <HourTime>{`1:00`}</HourTime>
        <WeatherIcon alt = "weather icon"/>
        <TemperatureWrapper/>
        <FallWrapper>
        <Fall>{`1 mm`}</Fall>
          <Bar style = {{ height: 1 }}/>
        </FallWrapper>
        <WindWrapper withoutBorder>
          <WindDirection>
            <WindIcon degree = {`45 deg`}/>
            <WindInfo>{(`45 deg`)}</WindInfo>
          </WindDirection>
          <WindPower>
            <WindInfo additionalSpace>{'Słaby'}</WindInfo>
            <WindSpeed>{`45 km/h`}</WindSpeed>
          </WindPower>
        </WindWrapper>
        <PressureWrapper/>
      </TileWrapper>
    </>
  )
}