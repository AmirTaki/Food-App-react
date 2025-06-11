import { useEffect, useState } from "react";

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
    console.log(food)
    return (
        <div>
            <div>
                <h1>{food.title}</h1>
                <img src={food.image} alt="" />
                <div>
                    <span>
                        <strong>🕧{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        👪<strong>Serves {food.servings}</strong>
                    </span>
                    <span>
                        {food.vegetarian ? "🥕Vegetrian" :"🍖Non-Vegetrian"}
                    </span>
                    <span>{food.vegan ? "🐮 Vegan" : "" } </span>
                </div>
                <div>
                    💲<span>{food.pricePerServing/100} Per Serving</span>
                </div>

                <div>
                    <h2>Instructions</h2>
                    {isLoading === false &&  food.analyzedInstructions[0].steps.map((step)=>(
                        <li>{step.step}</li>
                    )) }
                </div>
            </div>
        </div>
    )
}