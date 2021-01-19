import React from 'react'
import { CenterText, Legend, LegendLabel } from './styled'

export const LegendList = () => (
  <Legend>
    <LegendLabel><CenterText>{'Dzień'}</CenterText></LegendLabel>
    <LegendLabel><CenterText>{'Godzina'}</CenterText></LegendLabel>
    <LegendLabel><CenterText>{'Prognoza'}</CenterText></LegendLabel>
    <LegendLabel><CenterText>{'Temperatura'}</CenterText></LegendLabel>
    <LegendLabel><CenterText>{'Opady'}</CenterText></LegendLabel>
    <LegendLabel><CenterText>{'Kierunek wiatru'}</CenterText></LegendLabel>
    <LegendLabel><CenterText>{'Prędkość wiatru'}</CenterText></LegendLabel>
    <LegendLabel><CenterText>{'Ciśnienie'}</CenterText></LegendLabel>
  </Legend>
)