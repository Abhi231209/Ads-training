import { useState } from "react";

export default function Multiplestateinone(){
    const [states,setStates]=useState({
        name:"abhishek",
        rollno:'180010140001',
        grad:'B tech (It)'
    })
    var handelchange=()=>{
        setStates({
            name:"Dinesh",
            rollno:'180010140015',
            grad:'B tech (cse)'
        })
    }
    var changename=()=>{
        setStates({
            ...states,
            name:"Dinesh"
        })
    }
    var changeroll=()=>{
        setStates({
            ...states,
            rollno:'180010140015'
        })
    }
    var changedegree=()=>{
        setStates({
            ...states,
            grad:'B tech (cse)'
        })
    }
    return (
        <>
        <div>
            My name is : {states.name}<br/>
            <button onClick={changename}>Name change</button><br/>
            My Roll no  is : {states.rollno}<br/>
            <button onClick={changeroll}>Roll No change</button><br/>

            My Degree is : {states.grad}<br/>
            <button onClick={changedegree}>Degree change</button><br/>


        </div>
        <button onClick={handelchange}>to change</button>
        </>
    )
}