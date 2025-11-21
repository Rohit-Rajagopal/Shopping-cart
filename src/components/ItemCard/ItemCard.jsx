import { useState } from "react";
import styles from "./ItemCard.module.css";

function ItemCard({ name="default", price="10" }) {
    const [ quantity, setQuantity ] = useState(0);

    const updateQuantity = (val) => {
        if (quantity + val < 0) {
            return;
        }
        setQuantity(quantity + val);
    }
    
    return (
        <div className={styles.card}>
            <p>{name}</p>
            <p>Rs. {price}</p>
            <div className={styles.quantityBox}>
                <button onClick={() => updateQuantity(-1)}>-</button>
                <p className={styles.quantityDisplay}>{quantity}</p>
                <button onClick={() => updateQuantity(1)}>+</button>
            </div>
            <button>Add to cart</button>
        </div>
    )
}

export default ItemCard;