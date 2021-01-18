export const getFallFromWeather = weatherObj =>
  weatherObj.rain
    ? weatherObj.rain['1h']
    : weatherObj.snow
    ? weatherObj.snow['1h']
    : 0