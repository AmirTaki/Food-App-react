import { useEffect, useState } from "react"

export default function Search (){
    const [query, setQuery] = useState("");
    // Syntax of the useEffecct hook :  useEffect(()=> {}, [])
    useEffect(()=> {
        function demo (){
            console.log("Demo function executed");
        }
        demo()
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