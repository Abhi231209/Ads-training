import classes from './Checkout.module.css'
import { useRef,useState } from 'react';
const Checkout = (props) => {
    const nameref=useRef()
    const streetref=useRef()
    const postalcoderef=useRef()
    const cityref=useRef()
    const [formvalidation,setFormvalidation]=useState({
        name: true,
        street: true,
        postalcode: true,
        city: true
    })

    const isempty=value=>value.trim() === '';
    const islength=value=>value.trim().length=== 6;
    var handelsubmit=(e)=>{
       e.preventDefault()
       const namevalue=nameref.current.value;
       const streetvalue=streetref.current.value
       const postalcodevalue=postalcoderef.current.value
       const cityvalue=cityref.current.value
        
       const nameisvalid= !isempty(namevalue);
       const streetisvalid= !isempty(streetvalue);
       const postalcodeisvalid= islength(postalcodevalue);
       const cityisvalid= !isempty(cityvalue);
       
       setFormvalidation({
        name: nameisvalid,
        street: streetisvalid,
        postalcode: postalcodeisvalid,
        city: cityisvalid
       })
       props.onSubmit({
         name:namevalue,
         street:streetvalue,
         postalcode:postalcodevalue,
         city:cityvalue,
       })
    }

  return (
    <form className={classes.form} onSubmit={handelsubmit}>
    <div className={classes.control}>
      <label htmlFor='name'>Your Name</label>
      <input type='text' id='name' ref={nameref}/>
      {!formvalidation.name && <p>Please enter a valid name</p>}
    </div>
    <div className={classes.control}>
      <label htmlFor='street'>Street</label>
      <input type='text' id='street' ref={streetref}/>
      {!formvalidation.street && <p>Please enter a valid street name</p>}

    </div>
    <div className={classes.control}>
      <label htmlFor='postal'>Postal Code</label>
      <input type='text' id='postal' ref={postalcoderef}/>
      {!formvalidation.postalcode && <p>Please enter a valid postal code</p>}

    </div>
    <div className={classes.control}>
      <label htmlFor='city'>City</label>
      <input type='text' id='city' ref={cityref}/>
      {!formvalidation.city && <p>Please enter a valid city name</p>}

    </div>
    <div className={classes.actions}>
      <button type='button' onClick={props.onClose}>
        Cancel
      </button>
      <button className={classes.submit}>Confirm</button>
    </div>
  </form>
  );
};
export default Checkout;
