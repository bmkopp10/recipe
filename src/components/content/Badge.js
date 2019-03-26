import React from 'react';
import '../../style.css';

function Badge (props) {
  const ingredientList = props.ingredientList
  const ingredientsRequired = props.ingredientsRequired
  let total = 0
  ingredientsRequired.map(ingredient => {
      for (let i = 0; i < ingredientList.length; i++) {
        if (ingredientList[i].name === ingredient) {
          total++;
        }
      }
  })

  return(
    <div className='badge'>
      <span>{total}/</span>
      <span>{ingredientsRequired.length}</span>
    </div>
  )
}

export default Badge;
