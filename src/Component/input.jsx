import React, { useState } from "react";

const SimpleInput = (props) => {

  const [condition,setCondition]=useState('');
  const [touched,setTouched]=useState(false);
  const Aloha= condition.trim() ==='';

  let truthy=false;
  if (condition){
    truthy = true
  }

function formHandler(e) {
  e.preventDefault();
  setTouched(true)

  if (Aloha){
    return;
  }
  console.log(condition);
  setCondition('')
  setTouched(false)
  
}
function inputHAndler(e) {
  setCondition(e.target.value)
}
  function Blur() {
    setTouched(true)
  }

  const Alpha = Aloha && touched

  return (
    <form onSubmit={formHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputHAndler} onBlur={Blur} value={condition}/>
      </div>
      <div className="form-actions">
        {Alpha && <p className="error-text">Please enter a name</p>}
        <button disabled={!truthy}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
