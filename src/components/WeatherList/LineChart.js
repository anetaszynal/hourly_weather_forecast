import React from 'react'

export const LineLabelChart = ({ weather, feature, color, symbol, height, fontSize, space  }) => {
  const weatherIngredient = weather.map((el) => Math.round(el[feature]))

  const minimum = Math.min.apply(null, weatherIngredient)
  const maximum = Math.max.apply(null, weatherIngredient)
  const spaces = space / (maximum - minimum)

  const dataSet = weatherIngredient.map((feature, index) => (`${index * 60 + 30},${Math.floor((maximum - feature) * spaces) + 23}`))

  return (
    <svg version = "1.2"
         xmlns = "http://www.w3.org/2000/svg"
         height={height}
         width={2880}
         viewBox={`0 0 2880 ${height}`}
      >
      <path
            stroke-width = "2"
            stroke = {color}
            fill = "none"
            stroke-linecap = "round"
            d = {`M${dataSet.join(' ')}`}>
      </path>
      <g>
        {dataSet.map((item, index) => (
          <>
            <text font-size={fontSize} text-anchor = "middle" x = {item.split(',')[0]} y = {(item.split(',')[1] - 10)}>
              {`${weatherIngredient[index]}${symbol}`}
            </text>
            <circle cx = {item.split(',')[0]} cy = {item.split(',')[1]} r = "4" fill={"#ffffff"} stroke={"#000000"} strokeWidth={1}></circle>
          </>
        ))}
      </g>
    </svg>
  )
}
