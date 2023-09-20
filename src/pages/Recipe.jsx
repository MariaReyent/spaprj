import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe(){
    const [recipe, setRecipe]=useState();
    const {id}=useParams();
    const navigate = useNavigate();
    const goBack =()=>
      navigate(-1);
   
    useEffect (()=>{
        getMealById(id).then((data)=>setRecipe(data.meals[0]));
    }, [id]);
     
   return <>
   <button className="btn" onClick={goBack}>Go back</button>
   {!recipe.idMeal ? <Preloader/> : 
          (<div className="recipe">
              <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
              <h1>{recipe.strMeal}</h1>
          </div>) }
</>
}

export {Recipe}