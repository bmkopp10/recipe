import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import MainContent from './components/content/MainContent';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      meals:[],
      ingredients:[],
      loading:true,
    }
  }

  componentDidMount(){
    const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i';
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.buildRecipeArray(data.meals)
            this.setState({
              meals: data.meals
            }, ()=>{
              this.buildRecipeArray()
            })
      })
  }

  buildRecipeArray =()=> {
    let mealsArr = []
    for (let i = 0; i < this.state.meals.length; i++){
      let mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.state.meals[i].idMeal
      fetch(mealUrl)
        .then(response => response.json())
        .then(data =>{
          mealsArr.push(data.meals[0])
          if (this.state.meals.length === mealsArr.length){
            this.setState({
              meals: mealsArr,
              loading: false,
            })
          }
        })
    }

  }

  render(){
    if (this.state.loading) return <h1>Loading...</h1>
    return (
      <div className="App">
        <Header title="Recipe Finder"/>
        <MainContent meals={this.state.meals} />
      </div>
    );
  }
}

export default App;
