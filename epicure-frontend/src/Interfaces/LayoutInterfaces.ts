import { Dispatch, SetStateAction } from "react"



export interface RestaurantData{
    name?:string
    chef?:string
    open?:boolean
    new?:boolean
    popular?:boolean
    url?:string
    stars?:number
    dishescontainer:DishData[]
}
export interface DishData{
    name?:string
    ingredients?:string
    url?:string
    price:number
    type?:string
    closeModal?:Dispatch<SetStateAction<boolean>>
}
export interface DishBagData{
    name:string
    url:string
    price:number
    quantity:number
    sides?:[]
    changes?:[]
}
export interface ChefData{
    award?:boolean
    name?:string
    url?:string
    Restaurantscontainer?:RestaurantData[]
    new?:boolean
    popular?:boolean
}