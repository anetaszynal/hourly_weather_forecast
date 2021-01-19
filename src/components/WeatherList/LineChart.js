import React, { Fragment } from 'react'
import { WEATHER_TILE_WIDTH } from '../../lib/consts'

export const LineChart = ({ weather, feature, color, symbol, height, space }) => {
  const weatherIngredient = weather.map((el) => Math.round(el[feature]))

  const minimum = Math.min.apply(null, weatherIngredient)
  const maximum = Math.max.apply(null, weatherIngredient)
  const spaces = space / (maximum - minimum)

  const dataSet = weatherIngredient.map((feature, index) => (`${index * WEATHER_TILE_WIDTH + WEATHER_TILE_WIDTH / 2},${Math.floor((maximum - feature) * spaces) + 23}`))

  return (
    <svg version = "1.2"
         xmlns = "http://www.w3.org/2000/svg"
         height = {height}
         width = {2880}
         viewBox = {`0 0 2880 ${height}`}>
      <path strokeWidth = "2"
            stroke = {color}
            fill = "none"
            strokeLinecap = "round"
            d = {`M${dataSet.join(' ')}`}></path>
      <g>
        {dataSet.map((item, index) => (
          <Fragment key = {index}>
            <text textAnchor = "middle"
                  x = {item.split(',')[0]}
                  y = {(item.split(',')[1] - 10)}>
              {`${weatherIngredient[index]}${symbol}`}
            </text>
            <circle cx = {item.split(',')[0]}
                    cy = {item.split(',')[1]}
                    r = "4"
                    fill = {'#ffffff'}
                    stroke = {'#000000'}
                    strokeWidth = {1}></circle>
          </Fragment>
        ))}
      </g>
    </svg>
  )
}
