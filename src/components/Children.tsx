import React from 'react'

interface ChildProps {
    color:string,
    onClick: () => void,
    name:string,
    age:number,
}

export const Children = ({color,onClick,name,age}:ChildProps) => {
  return (
    <div>
        {color}
        <button onClick={onClick}>Click me !</button>
    </div>
  )
}

export const Children2 =  () =>{
    return(
        <div>Children2</div>
    )
}