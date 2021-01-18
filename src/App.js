import React from 'react'
import { WeatherList } from './components/WeatherList'
import { WidgetWrapper } from './styled'
import { LegendList } from './components/LegendList'

function App() {
  return (
    <WidgetWrapper>
      <LegendList/>
      <WeatherList/>
    </WidgetWrapper>
  );
}

export default App;
