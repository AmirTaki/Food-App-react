import { useState } from "react"
import Search from "./components/Search"

function App() {
  const [foodData, setFoodData] = useState([])
  return (
    <>
      <Search foodData = {foodData}   setFoodData = {setFoodData}/>

      {foodData.map((food)=>(
        <h1>{food.title}</h1> 
      )) }
    </>
  )
}

export default App
