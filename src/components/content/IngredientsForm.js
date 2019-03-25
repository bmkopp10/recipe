import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientsForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      ingredient: '',
      ingredientList: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  render(){
    const ingredients = this.state.ingredientList.map((ingredient, index) =>
      <Ingredient
        key={index}
        name={ingredient.name}
        isChecked={ingredient.isChecked}
        index={index}
        handleRemove={this.handleRemove}
        handleChange={this.handleChange}
      />
    )
    return (
      <div>
        <label>
          What's in your fridge?
        </label>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.ingredient} name='ingredient' onChange={this.handleChange}/>
          <input type="submit" value="submit" />
        </form>
        {ingredients}
      </div>
    )
  }

  handleSubmit (event) {
      this.setState(prevState => ({
        ingredientList: [...prevState.ingredientList, {name: prevState.ingredient, isChecked: true}],
        ingredient:'',
      }))
      event.preventDefault()
  }

  handleChange (event, index) {
    const name = event.target.name
    if (event.target.type !== 'checkbox'){
      this.setState({
        [name]: event.target.value,
      })
    } else {
      const ingredientList = this.state.ingredientList
      ingredientList[index].isChecked = event.target.checked
      this.setState({ ingredientList: ingredientList})
    }

  }

  handleRemove (index) {
    const newList = this.state.ingredientList.filter((ingredient, i) => index !== i)
    this.setState({
      ingredientList: newList
    })
  }
}

export default IngredientsForm;
