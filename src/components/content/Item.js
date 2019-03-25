import React from 'react';

class Item extends React.Component {
  render(){
    return(
      <div style={{display:'inline-grid'}}>
        <div style={{padding:10}}>
          <img style={{width:300, height:300, borderRadius:40, display:'block'}} src={this.props.meal.strMealThumb} />
          <span>{this.props.meal.strMeal}</span>
        </div>
      </div>
    )
  }
}

export default Item;
