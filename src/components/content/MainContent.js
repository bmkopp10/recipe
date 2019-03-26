import React, { Component } from 'react';
import Meal from './Meal';
import IngredientsForm from './IngredientsForm';

class MainContent extends Component {
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
    // filter
    const meals = this.props.meals.filter(meal => {
      if (this.state.ingredientList.length > 0){
        for(let i = 0; i < this.state.ingredientList.length; i++) {
          if (meal.ingredientsRequired.includes(this.state.ingredientList[i].name)){
            if (this.state.ingredientList[i].isChecked) return true
          }
        }
      } else {
        return true
      }
    })
    // assign totals && sort
    // let total = 0
    // ingredientsRequired.map(ingredient => {
    //     for (let i = 0; i < ingredientList.length; i++) {
    //       if (ingredientList[i].name === ingredient) {
    //         total++;
    //       }
    //     }
    // })
    // display
    const filteredMeals = meals.map((meal) =>
        <Meal key={meal.idMeal} meal={meal} ingredientList={this.state.ingredientList}/>
    )
    return (
      <div>
        <div>
          <IngredientsForm
            handleChange={this.handleChange}
            handleRemove={this.handleRemove}
            handleSubmit={this.handleSubmit}
            ingredient={this.state.ingredient}
            ingredientList={this.state.ingredientList}
          />
          <button onClick={this.filterMeals}>Filter</button>
        </div>
        <div>
          {filteredMeals}
        </div>
      </div>
    )
  }

  handleSubmit (event) {
      this.setState(prevState => ({
        ingredientList: [...prevState.ingredientList, {name: prevState.ingredient.toLowerCase(), isChecked: true}],
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

export default MainContent;
