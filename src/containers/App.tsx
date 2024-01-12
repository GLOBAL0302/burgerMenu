import './App.css';
import {useState} from 'react';
import {ingredientsState} from '../types';
import '../components/ingredients.css';
import Ingredients from '../components/Ingredients';

function App() {
  const [ingredients, setIngredients] = useState<ingredientsState[]>([
    {name: "meat", amount: 0},
    {name: "cheese", amount:0},
    {name:"lettuce", amount:0},
    {name: "bacon", amount:0}
  ]);


  return (
    <>
      <div className="counter">
        <Ingredients ingredients={ingredients}/>
      </div>

      {/*need to get done late*/}
      {/*<div className="Burger">*/}
      {/*  <div className="BreadTop">*/}
      {/*    <div className="Seeds1"></div>*/}
      {/*    <div className="Seeds2"></div>*/}
      {/*  </div>*/}

      {/*  <div className="BreadBottom">*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}

export default App;
