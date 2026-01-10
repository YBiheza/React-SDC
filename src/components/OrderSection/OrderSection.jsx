import React from "react";
import { OrderCard } from '../OrderCard'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import styles from './OrderSection.module.css'
import { Button } from "../Button";

export function OrderSection () {
    
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <p className={styles.titleStyles}>Finish your order</p>
                <div className={styles.cardsBlock}>
                    {cartItems.map((item) => (
                        <OrderCard key={item.id} id={item.id} name={item.name} price = {` ${item.price}`} image = {item.image} className={styles.card} quantity={item.quantity}/>
                    ))}
                </div>
                <div className={styles.addressBlock}>
                    <div className={`${styles.streetLine} ${styles.addressLine}`}>
                        <p className={styles.addressLabel}>Street:</p>
                        <input name='street' label='street' className={styles.input}/>                
                    </div>
                    <div className={`${styles.houseLine} ${styles.addressLine}`}>
                        <p className={styles.addressLabel}>House:</p>
                        <input label='house' name='house' className={styles.input}/>                
                    </div>
                    <Button label='Order'/>
                </div>
            </div>
        </main>
    )
}

export default OrderSection