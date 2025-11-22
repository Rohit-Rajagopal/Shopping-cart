import { useState } from "react";
import { useOutletContext } from "react-router";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

function calcTotalPrice(cart) {
    let total = 0;
    for (let item in cart) {
        total += cart[item].quantity * cart[item].price;
    }
    return total;
}

function getCartList(cart, delFn, quantityUpdateFn) {
    const cartList = [];
    for (let item in cart) {
        cartList.push(<CartItem key={`${item} ${cart[item].price}`} name={item} price={cart[item].price} quantity={cart[item].quantity} delFn={delFn} quantityUpdateFn={quantityUpdateFn}/>)
    }
    return cartList;
}

function Cart() {
    const [cart, setCart] = useOutletContext();

    const totalPrice = calcTotalPrice(cart);

    const delItem = (name) => {
        const { [name]: _, ...rest} = cart;
        setCart(rest);
    };

    const updateCart = (name, newQuantity) => {
        setCart({
            ...cart,
            [name]: {
                ...cart[name],
                quantity: newQuantity,
            }
        })
    };

    const cartList = getCartList(cart, delItem, updateCart);

    return (
        <div>
            <p>Total: Rs. {totalPrice}</p>
            <div className={styles.itemsDisplay}>
                {cartList}
            </div>
        </div>
    )
}

export default Cart;