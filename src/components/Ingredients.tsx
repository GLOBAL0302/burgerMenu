import {ingredientsState} from '../types';
import React from 'react';
import Ingredient from './Ingredient';

interface Props{
  ingredients:ingredientsState[]
}

const Ingredients:React.FC<Props> = (props) => {
  return (
    <>
      {props.ingredients.map(ingredient =>{
        return (
          <Ingredient ingredient={ingredient}
          />
        );
      })}
    </>
  );
};

export default Ingredients;