import useCount from "./use-count";

const ToCountNumberBackward =()=>{
   const count=useCount(false)
   return (
       <>
       {count}
       </>
   )
}

export default ToCountNumberBackward;