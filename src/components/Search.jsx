import { useEffect, useState } from "react"

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "7b3839cd485e4a858fdaeb01f35bf91f";

export default function Search (){
    const [query, setQuery] = useState("");
    // Syntax of the useEffecct hook :  useEffect(()=> {}, [])
    useEffect(()=> {
        async function fetchFood(){
            const responsive = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await responsive.json()
            console.log(data.results)
        }
        fetchFood()
    
    }, [query])

    return(
        <>
            <input 
                value = {query} 
                type="text" 
                onChange={(e)=>(setQuery(e.target.value))}   
            />
        </>
    )
}