import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Nav from "./components/Nav"
import './App.css'
import Container from "./components/Container"
import InnerContaienr from "./components/InnerContainer"
import FoodDetails from "./components/FoodDetails"
function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("658615")
  return (
    <>
      <Nav />
      <Search foodData = {foodData}   setFoodData = {setFoodData}/>
      <Container>
        <InnerContaienr>
          <FoodList foodData = {foodData} setFoodId = {setFoodId} />
        </InnerContaienr>
        <InnerContaienr>
          <FoodDetails foodId = {foodId} />
        </InnerContaienr>
      </Container>
    </>
  )
}

export default App
