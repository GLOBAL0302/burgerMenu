import {ingredientsState} from '../types';
import React from 'react';
import {IgredientsList} from "../constant";

interface Props{
  ingredient: ingredientsState
}
const Ingredient:React.FC<Props> = (props) => {
  let index:number  =  IgredientsList.findIndex(item => item.name === props.ingredient.name);

  return (
    <div className="ingrediantDiv">
      <img src={IgredientsList[index].picture} alt="ingredientPic" style={{maxWidth:"150px"}}/>
      <p className="ingrediantName">{props.ingredient.name}</p>
      <p>{props.ingredient.amount}</p>
    </div>
  );
};

export default Ingredient;