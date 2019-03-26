import React from 'react';
import Badge from './Badge';
import '../../style.css';

class Meal extends React.Component {
  render(){
    const url = this.props.meal.strMealThumb
    const name = this.props.meal.strMeal
    const ingredientsRequired = this.props.meal.ingredientsRequired
    const { ingredientList } = this.props
    return(
      <div style={{display:'inline-grid'}}>
        <div onClick={()=> console.log(ingredientsRequired)} className='meal-container'>
          {ingredientList.length > 0 && <Badge ingredientList={ingredientList} ingredientsRequired={ingredientsRequired}/>}
          <img style={{width:300, height:300, borderRadius:40, display:'block'}} src={url} />
          <span>{name}</span>
        </div>
      </div>
    )
  }
}

export default Meal;
