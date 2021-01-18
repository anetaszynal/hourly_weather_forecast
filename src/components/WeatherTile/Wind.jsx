import { WindDirection, WindIcon, WindInfo, WindPower, WindSpeed, WindWrapper } from './styled'

export const Wind = ({windInfo, id}) => {
  const { speed, degree } = windInfo
  const getWindSpeedTranslation = windSpeed => windSpeed < 4.0
    ? 'Słaby'
    : windSpeed < 8.0
      ? 'Umiar.'
      : 'Silny'

  const getWindDirectionTranslation = degree => degree > 22.5 && degree <= 67.5
    ? 'Pn-Wsch.'
    : degree > 67.5 && degree <= 112.5
      ? 'Wsch.'
      : degree > 112.5 && degree <= 157.5
        ? 'Pd-Wsch.'
        : degree > 157.5 && degree <= 202.5
          ? 'Pd.'
          : degree > 202.5 && degree <= 247.5
            ? 'Pd-Zach.'
            : degree > 247.5 && degree <= 292.5
              ? 'Zach.'
              : degree > 292.5 && degree <= 337.5
                ? 'Pn-Zach.'
                : 'Pn.'

  return(
    <WindWrapper withoutBorder = {id === 0}>
      <WindDirection>
        <WindIcon degree = {`${degree}deg`}/>
        <WindInfo>{getWindDirectionTranslation(degree)}</WindInfo>
      </WindDirection>
      <WindPower>
        <WindInfo additionalSpace>{getWindSpeedTranslation(speed)}</WindInfo>
        <WindSpeed>{`${speed} km/h`}</WindSpeed>
      </WindPower>
    </WindWrapper>
  )
}