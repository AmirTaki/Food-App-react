import { useEffect, useState } from "react";
import styles from "./formdetails.module.css";

export default function FoodDetails({foodId}) {
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "b3c9528341c9486b883f910b7cb07662";
    const [food, setFood]  = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function fetchFood () {
           const responsive = await  fetch(`${URL}?apiKey=${API_KEY}`)
           const data = await responsive.json()
           setFood(data);
           setIsLoading(false);
        }
        fetchFood()
    },[foodId])

    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className = {styles.recipeName}>{food.title}</h1>
                <img className= {styles.recipeImage}  src={food.image} alt="" />
                <div className = {styles.recipeDetails}>
                    <span>
                        <strong>🕧{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        👪<strong>Serves {food.servings}</strong>
                    </span>
                    <span>
                        <strong>
                            {food.vegetarian ? "🥕Vegetrian" :"🍖Non-Vegetrian"}
                        </strong>
                    </span>
                    <span>
                        <strong>
                            {food.vegan ? "🐮 Vegan" : "" }
                        </strong> 
                    </span>
                </div>
                <div>
                    💲<span>{food.pricePerServing/100} Per Serving</span>
                </div>
                <h2>Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading === false &&  food.analyzedInstructions[0].steps.map((step)=>(
                            <li>{step.step}</li>
                        )) }
                    </ol>
                 
                </div>
            </div>
        </div>
    )
}