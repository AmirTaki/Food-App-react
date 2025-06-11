export default function FoodList ({foodData}) {
    return(
        <>
        {foodData.map((food)=>(
        <h1>{food.title}</h1> 
      )) }
        </>
    )
}