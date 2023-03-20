import { SliderThumb } from '@mui/material';
import clsx from 'clsx';
import React from 'react'

export default function ThumbComponent(props:any) {
    const {children,className,...other}=props;
    const extraClassName=
    other["data-index"] === 0 ? "first-thumb" : "second-thumb";
  return (
    <SliderThumb {...other} className={clsx(className, extraClassName)}>
      {children}
      
    </SliderThumb>  )
}
