import React from 'react'
interface RatingSection{
  starNumber:number;
}
export default function StartContainer(props:RatingSection) {
  let url='/Images/Icon/StarEmpty.svg'
  const starArray=[url,url,url,url,url];
  for (let index = 0; index < props.starNumber; index++) {
    starArray[index]='/Images/Icon/StarFilled.svg';
    
  }
  return (
    <div style={{
      display:'flex',
    }}>
      {starArray.map((data,key)=>
        <img key={key} src={data} alt='star'/>
      )}
    </div>
  )
}
