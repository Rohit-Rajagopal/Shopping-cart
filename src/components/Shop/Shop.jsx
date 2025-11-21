import { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./Shop.module.css";

function Shop() {

    return (
        <div className={styles.itemsDisplay}>
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
            <ItemCard name="shirt" price="5" />
        </div>
    )
}

export default Shop;