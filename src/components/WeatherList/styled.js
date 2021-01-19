import styled from 'styled-components'
import { WEATHER_TILE_WIDTH } from '../../lib/consts'

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  padding: 0;
  white-space: nowrap;
  margin: 0;
  border-bottom: solid 1px #eee;
`

export const ListItem = styled.li`
  width: ${WEATHER_TILE_WIDTH}px;
`

export const ChartsWrapper = styled.div`
  height: 110px;
  position: absolute;
  top: 102px;
  font-weight: 700;
  font-size: 18px;
`
export const PressureChartsWrapper = styled.div`
  height: 80px;
  position: absolute;
  top: 380px;
  font-size: 11px;
`