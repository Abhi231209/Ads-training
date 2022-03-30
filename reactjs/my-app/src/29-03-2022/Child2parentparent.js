
import Child2parentchild from "./Child2parentchild"  

export default function Child2parentparent(){
function forvalue(x){
   console.log(x)
}

    return(
        <>
        <Child2parentchild functionforvalue={forvalue}/>
        </>
    )
}