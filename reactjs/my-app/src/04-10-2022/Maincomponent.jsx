import React ,{useState} from 'react'
import ForPrintlist from './ForPrintlist'

export default function Maincomponent() {
    const [Fordata,setForData]=useState([])
    function noname(){
        fetch('https://swapi.dev/api/films/')
        .then((res)=>{
           return res.json()
        })
        .then((data)=>{
            const moviedata=data.results.map(movieda=>{
                return {
                    id:movieda.episode_id,
                    title:movieda.title,
                }
            })
            setForData(moviedata)
        })
    }
  return (
    <div>
        <button onClick={noname}>To Get Movie name</button><br/>
        <ForPrintlist data={Fordata}/>
    </div>
  )
}
