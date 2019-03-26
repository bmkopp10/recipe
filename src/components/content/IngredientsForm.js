import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientsForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      ingredient: '',
      ingredientList: [],
    }
  }

  render(){
    const {handleChange, handleRemove, handleSubmit, ingredient, ingredientList} = this.props
    const ingredients = ingredientList.map((ingredient, index) =>
      <Ingredient
        key={index}
        name={ingredient.name}
        isChecked={ingredient.isChecked}
        index={index}
        handleRemove={handleRemove}
        handleChange={handleChange}
      />
    )
    return (
      <div>
        <label>
          What's in your fridge?
        </label>
        <form onSubmit={handleSubmit}>
          <input value={ingredient} name='ingredient' onChange={handleChange}/>
          <input type="submit" value="submit" />
        </form>
        {ingredients}
      </div>
    )
  }
}

export default IngredientsForm;
