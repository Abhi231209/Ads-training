import { useState,useEffect} from "react"


const useCount=(forward=true)=>{
   const [counter,setcounter]=useState(0);
   useEffect(()=>{
    const number =setInterval(()=>{
        if(forward){
            setcounter((prevstate)=>{
                return prevstate+1;
            })
        }else{
            setcounter((prevstate)=>{
                return prevstate-1;
            })
        }

    },1000)
   return ()=> clearInterval(number)
   },[forward])
   return (
       <>
       <h1>{counter}</h1>
       </>
       )
}

export default useCount
