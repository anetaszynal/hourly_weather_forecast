import React, { useEffect, useRef, useState } from 'react'
import { Arrow, Shadow, SliderBox, Wrapper } from './styled'
import { BORDER_WIDTH, LABEL_WIDTH, WEATHER_TILE_WIDTH } from '../../lib/consts'

export const Slider = ({ children, weatherLength }) => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [clientX, setClientX] = useState(0)
  const [scrollX, setScrollX] = useState(0)
  const [showSlider, setShowSlider] = useState(false)
  const weatherRef = useRef()

  const totalScroll = (weatherLength - Math.ceil((document.body.offsetWidth - LABEL_WIDTH - weatherLength * BORDER_WIDTH) / WEATHER_TILE_WIDTH)) * WEATHER_TILE_WIDTH

  useEffect(() => {
    if (scrollX < 0) {
      setScrollX(0)
    }
    else if (scrollX >= totalScroll){
      setScrollX(totalScroll)
    }
  }, [scrollX, totalScroll])

  const onMouseOver = () => setShowSlider(true)
  const onMouseOut = () => setShowSlider(false)

  const onMouseDown = event => {
    setIsScrolling(true)
    setClientX(event.clientX)
  }

  const onMouseUp = () => {
    setIsScrolling(false)
  }

  const onMouseMove = event => {
    if (isScrolling) {
      weatherRef.current.scrollLeft = scrollX - event.clientX + clientX
      setScrollX(scrollX - event.clientX + clientX)
      setClientX(event.clientX)
    }
  }

  const onClickNext = () => {
    weatherRef.current.scrollLeft = scrollX + WEATHER_TILE_WIDTH
    setScrollX(scrollX + WEATHER_TILE_WIDTH)
  }

  const onClickPrevious = () => {
    weatherRef.current.scrollLeft = scrollX - WEATHER_TILE_WIDTH
    setScrollX(scrollX - WEATHER_TILE_WIDTH)
  }

  return (
    <Wrapper visible = {isScrolling}
             ref = {ref => weatherRef.current = ref}
             onMouseOut = {onMouseOut}
             onMouseOver = {onMouseOver}
             onMouseDown = {onMouseDown}
             onMouseUp = {onMouseUp}
             onMouseMove = {onMouseMove}>
      <SliderBox hidden = {!showSlider || scrollX <= 0} onClick = {onClickPrevious}>
        <Arrow>◀</Arrow>
      </SliderBox>
      {children}
      <SliderBox hidden = {!showSlider || scrollX >= totalScroll} onClick = {onClickNext} back>
        <Arrow>◀</Arrow>
      </SliderBox>
      {scrollX < totalScroll && <Shadow/>}
    </Wrapper>
  )
}