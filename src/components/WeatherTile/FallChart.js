import { Bar, Fall, FallWrapper } from './styled'
import { getFallFromWeather } from '../../lib/utils'

export const FallChart = ({weather, fall}) => {
  const allFall = weather.map(item => getFallFromWeather(item))
  const maximum = Math.max.apply(null, allFall)
  const spaces = 44 / maximum

  return(
    <FallWrapper>
      <div style = {{height: (60 - 16 - (spaces * fall)) }}/>
      {fall > 0 && <Fall>{`${fall} mm`}</Fall>}
      <Bar style = {{ height: (spaces * fall)}}/>
    </FallWrapper>
  )
}