import styled, { css } from 'styled-components'
import { ReactComponent as windIcon } from './windIcon.svg'
import {WEATHER_TILE_WIDTH, BORDER_WIDTH} from '../../lib/consts'

export const TileWrapper = styled.article`
  display: grid;
  grid-template-columns: 60px;
  align-items: center;
  justify-items: center;
  border-left: solid ${BORDER_WIDTH}px #eee;
`

export const Day = styled.p`
  color: #888;
  text-align: left;
  font-size: 11px;
  text-transform: uppercase;
  padding-left: 6px;
  line-height: 1.25;
  white-space: nowrap;
  height: 16px;
  margin: 0;
  
  ${({ border }) => border && css`
   border-left: solid ${BORDER_WIDTH}px #eee;
  `}
`

export const HourTime = styled.h2`
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  margin: 0;
  height: 30px;
`
export const WeatherIcon = styled.img`
  width: 35px;
  height: 35px;
`

export const TemperatureWrapper = styled.div`
  height: 110px;
`;

export const FallWrapper = styled.div`
  height: 60px;
`

export const Fall = styled.p`
  font-size: 12px;
  line-height: 1;
  margin: 0;
  padding: 2px;
  text-align: center;
`

export const Bar = styled.div`
  background-color: #33ccff;
  width: ${WEATHER_TILE_WIDTH}px;;
`;

export const WindWrapper = styled.div`
  margin-left: -1px;
  width: 100%;
  background-color: #f0f0f0;
  border-left: solid ${BORDER_WIDTH}px #fff;
  
  ${({ withoutBorder }) => withoutBorder && css`
   border: 0;
  `}
`
export const WindDirection = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
  height: 60px;
`;

export const WindIcon = styled(windIcon)`
  width: 24px;
  height: 24px;
  margin: 10px 0;
  transform: rotate(${({degree}) => degree});
`

export const WindPower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
`;

export const WindInfo = styled.p`
  display: inline;
  font-size: 10px;
  line-height: 1;
  margin: 0;
  
  ${({ additionalSpace }) => additionalSpace && css`
    padding: 10px 0 5px 0
  `}
`

export const WindSpeed = styled.p`
  display: inline;
  font-size: 12px;
  line-height: 1;
  margin: 0;
`
export const PressureWrapper = styled.div`
  width: 100%;
  height: 100px;
`;