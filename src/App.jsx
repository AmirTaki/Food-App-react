import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Nav from "./components/Nav"
import './App.css'
import Container from "./components/Container"
import InnerContaienr from "./components/InnerContainer"
function App() {
  const [foodData, setFoodData] = useState([])
  return (
    <>
      <Nav />
      <Search foodData = {foodData}   setFoodData = {setFoodData}/>
      <Container>
        <InnerContaienr>
          <FoodList foodData = {foodData} />
        </InnerContaienr>
      </Container>
    </>
  )
}

export default App
