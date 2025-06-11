import styles from "./fooditem.module.css"
export default function FoodItem ({food}) {
    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImg} src={food.image} alt="" />
            <div className = {styles.itemContent}>
                <p className={styles.itemName}> {food.title}</p>
            </div>  
            <div className={styles.buttonConainer}>
                <button className={styles.itemButton}>View Recpie</button>
            </div>
        </div>
    )
}