import styles from './Card.module.css'
import { Button } from '../Button'
import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cartSlice';

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

export function Card ({key, id, category, name, description, price, image}) {

    const [inputValue, setInputValue] = useState(1);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToCart({
            id,
            name,
            price,
            image,
            quantity: Number(inputValue)
            }
        ))
    };

    const truncName = useMemo(() => {
       return truncate(name, 27);
    }, [name])

    const truncDescription = useMemo(() => {
       return truncate(description, 85);
    }, [description])

    return (
        <div className={styles.cardStyles}>
            <div className={styles.imageBlock}>
                <img src={image} className={styles.imageStyle} alt={name} />
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.topRow}>
                    <p className={styles.cardTitle}>
                        {truncName}
                    </p>
                    <p className={styles.priceBlock}>
                        {price}
                    </p>
                </div>
                <p className={styles.cardDescription}>
                    {truncDescription}
                </p>
                <div className={styles.formBlock}>
                    <form className={styles.formBlock}>
                        <input type="number" id="quantity" name="quantity" min="1"  value = {inputValue} onChange={handleInputChange} className={styles.goodsNumberField}/>
                        <Button label = 'Add to card' onClick={handleAdd}/>                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Card