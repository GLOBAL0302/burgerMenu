import meatImg from "./assets/meat.png";
import cheeseImg from "./assets/cheese.png";
import lettuceImg from "./assets/lettuce.png";
import baconImg from "./assets/bacon.png";
import {IngredientsType} from './types';



export  const IgredientsList:IngredientsType[] = [
  {name: "meat", price: 80, picture: meatImg},
  {name:"cheese", price: 50, picture: cheeseImg},
  {name: "lettuce", price: 10, picture: lettuceImg},
  {name: "bacon", price: 60, picture: baconImg}
];