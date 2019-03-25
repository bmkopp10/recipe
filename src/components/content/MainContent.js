import React, { Component } from 'react';
import Item from './Item';
import IngredientsForm from './IngredientsForm';

class MainContent extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const meals = this.props.meals.map((meal) =>
        <Item key={meal.idMeal} meal={meal} />
    )
    return (
      <div>
        <div>
          <IngredientsForm />
          <button onClick={()=> this.selectRandomMeal()}>Random</button>
        </div>
        <div>
          {meals}
        </div>
      </div>
    )
  }

  selectRandomMeal =()=> {
    alert(Math.random())
  }
}

export default MainContent;
