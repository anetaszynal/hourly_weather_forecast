import React from 'react'
import { WeatherList } from './components/WeatherList'
import { WidgetWrapper } from './styled'

function App() {
  return (
    <WidgetWrapper>
      <WeatherList/>
    </WidgetWrapper>
  );
}

export default App;
