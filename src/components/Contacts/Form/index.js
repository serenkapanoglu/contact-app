import { useState } from "react"
import React from 'react'

function Form({ addContact, contacts }) {



const [form, setForm] = useState({ fullname:'', phone_number:""})

const onChangeInput = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
};

const onSubmit = (e) => {
   e.preventDefault();

   if(form.fullname === "" || form.phone_number === ""){
    return false;
   }


   addContact([...contacts, form]);
    console.log(form);
    
    setForm({fullname:"",phone_number:""})
    
    
};


  return (
    <>

    <form onSubmit={onSubmit}>
        <div>
    <input name="fullname"
     placeholder='Fullname'
     value={form.fullname}
     onChange={onChangeInput}
     />
   </div>

    <div>
    <input name="phone_number"
     placeholder='Phone Number'
     value={form.phone_number}
     onChange={onChangeInput}
     />
    </div>
    
        <div>
        <button className="btn">Add</button>
        </div>
      </form>
      
    </>
  )
}

export default Form
