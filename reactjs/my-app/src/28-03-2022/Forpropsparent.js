
import Forpropschild from "./Forpropschild"
import Cont  from "./Composition"

export default function Forpropsparent() {
    const data = {
    Abhidata :{ 
        firstname: 'abhishek',
          lastname: 'jangra' ,
          address: 'VPO Arya Nagar'
        },
    Dineshdata:{
        firstname:'Dinesh',
        lastname: 'Pandit' ,
        address: 'Fridabad'
    },
    Ankurdata:{
        firstname:'Ankur',
        lastname: 'Godara' ,
        address: 'Fridabad'
    }    
   }
return (
    <Cont>
       <Forpropschild data1={data.Abhidata}/>
       <Forpropschild data1={data.Dineshdata}/>
       <Forpropschild data1={data.Ankurdata}/>
    </Cont>
)
}