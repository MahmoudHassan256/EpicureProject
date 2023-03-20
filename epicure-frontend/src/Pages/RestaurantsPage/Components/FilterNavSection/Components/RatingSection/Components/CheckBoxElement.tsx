import React, { useEffect } from 'react'
import { FormElement } from '../styles';
import StartContainer from './StartContainer';

interface PropsData{
    starnumber:number,
    Rating:number[],
    updateClearBtn:any,
    setRating:any


}
export default function CheckBoxElement(props:PropsData) {
  useEffect(()=>{
    if(props.Rating.length>0)
    props.updateClearBtn(true);
    else{
      props.updateClearBtn(false);
    }
  })  
  return (
    <FormElement>
    <input type={'checkbox'}
      value={props.starnumber}
      checked={props.Rating.includes(props.starnumber)}
      onChange={()=> {
        if(props.Rating.filter((ele)=>ele===props.starnumber).length === 0){
        props.setRating([...props.Rating,props.starnumber])
        }
        else{
            props.setRating(props.Rating.filter((ele)=>ele!==props.starnumber));
        }
      }}
    />
    <StartContainer starNumber={props.starnumber} />
  </FormElement>  )
}
