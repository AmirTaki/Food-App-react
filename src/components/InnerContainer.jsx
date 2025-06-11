import styles from "./innerContainer.module.css"
export default function InnerContaienr ({children}) {
    return(
        <div class = {styles.innerContainer}>
            {children}
        </div>
    )
}