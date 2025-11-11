import styles from './Cart.module.css'
import { Button } from '../Button'
import React, { useEffect, useState } from 'react';

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

export function Cart ({key, category, onAddToCart, name, description, price, image}) {

    const [inputValue, setInputValue] = useState('1');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        onAddToCart(Number(inputValue));
    };




    return (
        <div className={styles.cartStyles}>
            <div className={styles.imageBlock}>
                <img src={image} className={styles.imageStyle} alt='dish picture' />
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.topRow}>
                    <p className={styles.cartTitle}>
                        {name}
                    </p>
                    <p className={styles.priceBlock}>
                        {price}
                    </p>
                </div>
                <p className={styles.cartDescription}>
                    {truncate(description, 85)}
                </p>
                <div className={styles.formBlock}>
                    <form className={styles.formBlock}>
                        <input type="number" id="quantity" name="quantity" min="1"  value = {inputValue} onChange={handleInputChange} className={styles.goodsNumberField}/>
                        <Button label = 'Add to cart' onClick={handleAdd}/>                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cart