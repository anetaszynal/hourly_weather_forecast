import React, { useRef, useState } from 'react'
import { Arrow, SliderBox, Wrapper } from './styled'

export const Slider = ({ children }) => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [clientX, setClientX] = useState(0)
  const [scrollX, setScrollX] = useState(0)
  const [showSlider, setShowSlider] = useState(false)
  const weatherRef = useRef()

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
    weatherRef.current.scrollLeft = scrollX + 60
    setScrollX(scrollX + 60)
  }

  const onClickPrevious = () => {
    weatherRef.current.scrollLeft = scrollX - 60
    setScrollX(scrollX - 60)
  }

  return (
    <Wrapper ref = {ref => weatherRef.current = ref}
             onMouseOut={onMouseOut} onMouseOver={onMouseOver}
             onMouseDown = {onMouseDown}
             onMouseUp = {onMouseUp}
             onMouseMove = {onMouseMove}>
      <SliderBox hidden={!showSlider} onClick = {onClickPrevious}>
        <Arrow>◀</Arrow>
      </SliderBox>
      {children}
      <SliderBox hidden={!showSlider} onClick={onClickNext} back>
        <Arrow>◀</Arrow>
      </SliderBox>
    </Wrapper>
  )
}