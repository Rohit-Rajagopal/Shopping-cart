import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./Shop.module.css";

const useFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
};

function Shop() {
    const { data, loading, error } = useFetch("https://fakestoreapi.com/products");
    const [ cart, setCart ] = useOutletContext();

    const updateCart = (name, quantity, price) => {
        setCart({
            ...cart,
            [name]: {
                quantity,
                price,
            }
        })
    }

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Server error: {error}</p>

    return (
        <div className={styles.itemsDisplay}>
            {
                data.map((item) => <ItemCard key={`${item.title} ${item.price}`} name={item.title} price={item.price} cartUpdateFn={updateCart} />)
            }
        </div>
    )
}

export default Shop;