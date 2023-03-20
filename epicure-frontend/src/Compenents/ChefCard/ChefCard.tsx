import React from 'react'
import { ChefData } from '../../Interfaces/LayoutInterfaces'
import { ChefoftheWeekContainer, ChefoftheWeekImg, ChefoftheWeekName } from './Styles'

export default function ChefCard(props:ChefData) {
    return (
        <ChefoftheWeekContainer>
            <ChefoftheWeekImg src={props.url} alt="chef"/>
            <ChefoftheWeekName>{props.name}</ChefoftheWeekName>
        </ChefoftheWeekContainer>
    )
}
