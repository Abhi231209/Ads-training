

export default function Renderinglist(){
   const arr=[
       {
           Id:1,
           Fname:"abhishek"
       },
       {
        Id:2,
        Fname:"dinesh"
       },
       {
        Id:3,
        Fname:"ankur"
       }
   ]

    return (
        <>
        <div>
            
            <ul>
                {arr.map((details)=>{
                    return <li key={details.Id}>{details.Fname}</li> 
                })}
            </ul>
        </div>
        </>
    )
}