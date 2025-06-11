import { useEffect, useState } from "react";

export default function FoodDetails({foodId}) {
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "c98a30923c7b490d995da7462e56fa95";
    const [food, setFood]  = useState("")
    useEffect(()=>{
        async function fetchFood () {
           const responsive = await  fetch(`${URL}?apiKey=${API_KEY}`)
           const data = await responsive.json()
           setFood(data);
        }
        fetchFood()
    },[foodId])
    return (
        <div>
            Food Details {foodId}
            {food.title}
            <img src={food.image} alt="" />
        </div>
    )
}