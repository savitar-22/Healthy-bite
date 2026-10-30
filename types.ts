export type Ingredient = { id:string; name:string; unitPrice:number; defaultQty:number; maxQty:number; removable:boolean };
export type Meal = { id:string; name:string; category:string; description:string; image:string; basePrice:number; ingredients:Ingredient[] };
export type SelectedIngredient = { ingredientId:string; quantity:number };
export type MealSelection = { meal:Meal; portions:SelectedIngredient[]; split:boolean; secondPortions?:SelectedIngredient[]; note:string };
export type OrderStatus = "New"|"Preparing"|"Ready"|"Completed";
export type Order = { id:string; table:string; items:MealSelection[]; total:number; status:OrderStatus; createdAt:string; payment:"At cashier" };
