import styles from "./item.module.css"

export default function Item ({item}) {
    return (
        <div className = {styles.itemContainer} >
            <div className = {styles.imageContainer}
> 
                <img  className={styles.image} 
                    src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt="" />           
            </div>
            <div className={styles.nameContainer}>
                <div  className={styles.name} >
                    {item.name}
                </div>
            </div>
            <div className = {styles.amount} >
                <h3>{item.amount} {item.unit}</h3>
            </div>
        </div>
    )
}
