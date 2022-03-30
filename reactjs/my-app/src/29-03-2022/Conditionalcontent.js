export default function Conditionalcontent(){
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
    let conditional
    if(arr.length!=0){
         conditional=arr.map((details)=>{
            return <li key={details.Id}>{details.Fname}</li> 
        })
    }
    return (
        <>
         <div>
            {/* <h1>{conditional}</h1> */}
            {arr.length==0 ? (<h1>No item in list</h1>):(arr.map((details)=>{
            return <li key={details.Id}>{details.Fname}</li> 
        }))}
         </div>
        </>
    )
}