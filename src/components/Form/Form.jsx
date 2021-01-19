import React from 'react'
import { Content, Input } from './styled'

export const Form = ({ city, getCityName, onFormSubmit }) => (
  <Content onSubmit = {onFormSubmit}>
    <Input
           type = "text"
           name = "city"
           placeholder = "Wpisz nazwę miejscowości"
           onChange = {getCityName}/>
  </Content>
)
