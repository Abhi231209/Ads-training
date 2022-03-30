

import "./Dynamicstylingcss.css"


function Dynamicstylingjs(){

    var div1="2"
    return (
        <>
            <div className={`fordiv${div1==="1"? `true`: ""}`}>
                this is div
            </div>
        </>
    )
}

export default Dynamicstylingjs;