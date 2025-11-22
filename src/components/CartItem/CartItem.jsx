import { useState } from "react";
import styles from "./CartItem.module.css";

function CartItem({ name, price, delFn, initQuantity }) {
    const [ quantity, setQuantity ] = useState(initQuantity);

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
            <button onClick={() => delFn(name)}>Remove Item</button>
        </div>
    )
}

export default CartItem;