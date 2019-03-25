import React from 'react';

function Ingredient (props) {
  const {name, index, isChecked, handleChange, handleRemove} = props
  return(
    <div>
      <input type='checkbox' name='isChecked' checked={isChecked} onChange={(event)=>handleChange(event, index)}/>
      <span>{name}</span>
      <button onClick={()=>handleRemove(index)}>remove</button>
    </div>
  )
}

export default Ingredient
