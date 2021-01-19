import React from 'react'
import { Content, Input } from './styled'

export const Form = ({ getCityName, onFormSubmit }) => (
  <Content onSubmit = {onFormSubmit}>
    <Input type = "text" name = "city" placeholder = "Wpisz nazwę miejscowości i naciśnij enter" onChange = {getCityName}/>
  </Content>
)
