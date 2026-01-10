import React from "react";
import { Button } from "../Button";
import styles from './OrderCard.module.css'
import { useDispatch} from "react-redux";
import { updateQuantity, deleteItem } from "../../store/cartSlice";

export function OrderCard ({id, name, price, image, quantity}) {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(updateQuantity({
            id,
            quantity: Number(e.target.value),
        }));
    };

    const deleteFromCart = () => {
                console.log("Deleting id:", id); // 🔥 проверяем
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
                    <Button cancel label = 'X' onClick={deleteFromCart}/>     
                </div>                
            </div>
        </div>
    )        
}

export default OrderCard