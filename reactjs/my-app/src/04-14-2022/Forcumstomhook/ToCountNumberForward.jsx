import useCount from './use-count'

const ToCountNumberForward=()=>{
    const counter=useCount()

    return (
        <>
        {counter}
        </>
    )

}

export default ToCountNumberForward;