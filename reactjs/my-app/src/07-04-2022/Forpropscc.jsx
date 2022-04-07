import { Component, useState } from "react";
import Forpropscc2 from './Forpropscc2'
    function Forpropscc(){
       const [value,setValue]=useState(true)
        const data=[
            {btech:'it'},
            {btech:'cse'},
            {btech:'pp'},
            {btech:'pkg'}
        ]
        const usersList = (
            <ul>
              {data.map((user) => (
                <Forpropscc2 data={user.btech} />
              ))}
            </ul>
          );
        var handelclick=()=>{
            setValue((prevstate)=>!prevstate)
        }
        return (
            <div>
                <button onClick={handelclick}>To show and hide</button>
                {value && usersList}
            </div>
        )
    }
export default Forpropscc;