import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"

function App() {
  const [foodData, setFoodData] = useState([])
  return (
    <>
      <Search foodData = {foodData}   setFoodData = {setFoodData}/>
      <FoodList foodData = {foodData} />
      
    </>
  )
}

export default App
// https://www.youtube.com/watch?v=wzxPaPkZDQg&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=51