import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { DishData, RestaurantData } from '../../../../../Interfaces/LayoutInterfaces'
import { setSelectedDish } from '../../../../../Slicers/SelectedDishSlice';
import { FilterBox, Label, SearchResultBoxWrapper, Value, Values } from './styles'

export default function SearchResultBox(props: { value: string }) {
    const Restaurants: RestaurantData[] = useSelector((state: any) => state.restaurants.value);
    const Dishes: DishData[] = useSelector((state: any) => state.dishes.value);
    function thereIsResult(){
        if(Restaurants.filter((ele) => ele.name?.toUpperCase().includes(props.value.toUpperCase())).length !== 0 ||
        Dishes.filter((ele) => ele.name?.toUpperCase().includes(props.value.toUpperCase())).length !== 0
        )return true;
        else return false;
    }
    const navigate=useNavigate();
    const dispatch=useDispatch();

    return (
        <div>
        {thereIsResult() && 
        <SearchResultBoxWrapper>
            <FilterBox>
                {Restaurants.filter((ele) => ele.name?.toUpperCase().includes(props.value.toUpperCase())).length !== 0 && <Label>Restaurants:</Label>}
                <Values>
                    {Restaurants.filter((ele) => ele.name?.toUpperCase().includes(props.value.toUpperCase())).slice(0,3).map((ele, key) =>
                        <Value key={key} onClick={()=>{navigate({pathname:"/Restaurant"},{state:ele})}}>{ele.name}</Value>
                    )}
                </Values>
                {Dishes.filter((ele) => ele.name?.toUpperCase().includes(props.value.toUpperCase())).length !== 0 && <Label>Dishes:</Label>}
                <Values>
                    {Dishes.filter((ele) => ele.name?.toUpperCase().includes(props.value.toUpperCase())).slice(0,3).map((ele, key) =>
                        <Value key={key} onClick={()=>{dispatch(setSelectedDish({...ele}));navigate({pathname:"/Dish"},{state:ele})}}>{ele.name}</Value>
                    )}
                </Values>
            </FilterBox>
        </SearchResultBoxWrapper>}
        </div>

    )
}