import React from "react";
import { Button } from "../Button";
import styles from './OrderCard.module.css'
import { useDispatch} from "react-redux";
import { updateQuantity, deleteItem } from "../../store/cartSlice";
import type { TOrderCard } from "./TOrderCard";
import { useAppDispatch } from "../../store/hooks";

export function OrderCard ({id, name, price, image, quantity}: TOrderCard ) {

    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateQuantity({
            id,
            quantity: Number(e.target.value),
        }));
    };

    const deleteFromCart = () => {
        dispatch(deleteItem ({id}))
    };

    return (
        <div className={styles.cardStyles}>
            <div className={styles.leftBlock}>
                <div className={styles.imageBlock}>
                    <img src={image} className={styles.image} alt={name} />
                </div>
                <p className={styles.name}>{name}</p>                
            </div>

            <div className={styles.rightBlock}>
                <p className={styles.price}>{price}</p>   
                <div className={styles.buttonBlock}>
                    <input value={quantity} onChange={handleChange} type="number" name="quantity" className={styles.inputBlock}/>
                    <Button cancel label='X' onClick={deleteFromCart} type={"button"} disabled={false}/>     
                </div>                
            </div>
        </div>
    )        
}

export default OrderCard