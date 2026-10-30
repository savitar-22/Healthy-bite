import type {MealSelection,SelectedIngredient} from "../types";
export function portionsPrice(base:number, portions:SelectedIngredient[], ingredients:MealSelection["meal"]["ingredients"]){
 return base + portions.reduce((sum,p)=>{const i=ingredients.find(x=>x.id===p.ingredientId);return sum+(i?i.unitPrice*p.quantity:0)},0);
}
export function selectionPrice(s:MealSelection){
 if(!s.split) return portionsPrice(s.meal.basePrice,s.portions,s.meal.ingredients);
 const first=portionsPrice(s.meal.basePrice/2,s.portions,s.meal.ingredients);
 const second=portionsPrice(s.meal.basePrice/2,s.secondPortions||[],s.meal.ingredients);
 return first+second;
}
