import { useEffect, useState } from "react"
import styles from "./search.module.css"
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "55d2bace92034be2844b587589547c41";

export default function Search ({foodData, setFoodData}){
    const [query, setQuery] = useState("");
    // Syntax of the useEffecct hook :  useEffect(()=> {}, [])
    useEffect(()=> {
        async function fetchFood(){
            const responsive = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await responsive.json()
            setFoodData(data.results)
        }
        fetchFood()
    
    }, [query])

    return(
        <div className={styles.searchContainer}>
            <input className={styles.input}
                value = {query} 
                type="text" 
                onChange={(e)=>(setQuery(e.target.value))}   
            />
        </div>
    )
}