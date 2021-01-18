import { Bar, Fall, FallWrapper } from './styled'
import { getFallFromWeather } from '../../lib/utils'
import { WEATHER_TILE_WIDTH } from '../../lib/consts'

export const FallChart = ({weather, fall}) => {
  const allFall = weather.map(item => getFallFromWeather(item))
  const maximum = Math.max.apply(null, allFall)
  const spaces = 44 / maximum
  const fallLabel = 12 + 2 *2

  return(
    <FallWrapper>
      <div style = {{height: (WEATHER_TILE_WIDTH - fallLabel - (spaces * fall)) }}/>
      {fall > 0 && <Fall>{`${fall.toFixed(1).replace(".", ",")} mm`}</Fall>}
      <Bar style = {{ height: (spaces * fall)}}/>
    </FallWrapper>
  )
}