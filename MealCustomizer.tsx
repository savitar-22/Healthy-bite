import {useMemo,useState} from "react";
import type {Meal,MealSelection,SelectedIngredient} from "../types";
import {selectionPrice} from "../lib/pricing";
import {Minus,Plus,Trash2,Split} from "lucide-react";
const initial=(meal:Meal)=>meal.ingredients.map(i=>({ingredientId:i.id,quantity:i.defaultQty}));
export default function MealCustomizer({meal,onAdd,onClose}:{meal:Meal;onAdd:(s:MealSelection)=>void;onClose:()=>void}){
 const [split,setSplit]=useState(false),[side,setSide]=useState<1|2>(1),[a,setA]=useState<SelectedIngredient[]>(initial(meal)),[b,setB]=useState<SelectedIngredient[]>(initial(meal)),[note,setNote]=useState("");
 const active=side===1?a:b, setter=side===1?setA:setB;
 const change=(id:string,delta:number)=>setter(old=>old.map(p=>p.ingredientId===id?{...p,quantity:Math.max(0,Math.min(meal.ingredients.find(i=>i.id===id)?.maxQty||4,p.quantity+delta))}:p));
 const price=useMemo(()=>selectionPrice({meal,portions:a,split,secondPortions:b,note}),[meal,a,b,split,note]);
 const save=()=>onAdd({meal,portions:a,split,secondPortions:split?b:undefined,note});
 return <div className="modal-backdrop"><section className="modal">
 <button className="close" onClick={onClose}>×</button><img className="modal-photo" src={meal.image}/><h2>{meal.name}</h2><p className="muted">{meal.description}</p>
 <button className={split?"toggle active":"toggle"} onClick={()=>{setSplit(!split);setSide(1)}}><Split size={17}/> Split this meal into two halves</button>
 {split&&<div className="tabs"><button className={side===1?"selected":""} onClick={()=>setSide(1)}>Half 1</button><button className={side===2?"selected":""} onClick={()=>setSide(2)}>Half 2</button></div>}
 <h3>{split?`Customize half ${side}`:"Choose your ingredients"}</h3>
 {meal.ingredients.map(i=>{const qty=active.find(p=>p.ingredientId===i.id)?.quantity||0;return <div className="ingredient" key={i.id}><div><b>{i.name}</b><small>{i.unitPrice?`+${i.unitPrice} DA / portion`:"Included"}</small></div><div className="qty"><button onClick={()=>change(i.id,-1)} aria-label="decrease"><Minus size={15}/></button><span>{qty===0?"Removed":qty}</span><button onClick={()=>change(i.id,1)} aria-label="increase"><Plus size={15}/></button><button className="remove" onClick={()=>setter(old=>old.map(p=>p.ingredientId===i.id?{...p,quantity:0}:p))}><Trash2 size={15}/></button></div></div>})}
 <label className="field-label">Special request</label><textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Any allergy or preparation note? Please inform staff of serious allergies."/>
 <div className="modal-footer"><strong>{Math.round(price).toLocaleString()} DA</strong><button className="primary" onClick={save}>Add to order</button></div>
 </section></div>
}
