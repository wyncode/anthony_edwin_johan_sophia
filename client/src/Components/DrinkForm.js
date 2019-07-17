import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"


class DrinkForm extends React.Component {

  state = {
    drinkData: []
  }

  getDrink= event => {
    const drink = event.target.value
    if(drink && drink.length >=3) {
    event.preventDefault();
    axios.get(`/api/search/${drink}`)
        .then(response => this.setState({drinkData: response.data.drinks || [] }))
        //.then(response => console.log(response.data))
    } else this.setState({ drinkData: [] })
  }

  render(){
    return(
      <>
        <h2>What's your drink?</h2>
        <br></br>
          <input 
            placeholder="Search Drink"
            // name="nameOfDrink" 
            type="search"
            autoComplete="off"
            onChange={this.getDrink} 
            /> 
          
        <div id="drinks">  
          {this.state.drinkData.map((drink,i) => (
           <Link key={drink.idDrink} to={`/Detailed/${drink.idDrink}`}>
              <div key={i} className="drink"> 
                <h3>{drink.strDrink}</h3>
                <img src={drink.strDrinkThumb} alt="cocktail"/> 
              </div>
          </Link>
          ))}
        </div> 
      </> 
    )
  }  
}



export default DrinkForm
