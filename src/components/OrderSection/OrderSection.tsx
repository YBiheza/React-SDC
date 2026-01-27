import React from 'react';
import { OrderCard } from '../OrderCard/OrderCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './OrderSection.module.css';
import { Button } from '../Button/Button';
import { useAppSelector } from '../../store/hooks';

export function OrderSection() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.titleStyles}>Finish your order</p>
        <div className={styles.cardsBlock}>
          {cartItems.map((item) => (
            <OrderCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={` ${item.price}`}
              image={item.image}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className={styles.addressBlock}>
          <div className={`${styles.streetLine} ${styles.addressLine}`}>
            <p className={styles.addressLabel}>Street:</p>
            <input id="street" name="street" className={styles.input} />
          </div>
          <div className={`${styles.houseLine} ${styles.addressLine}`}>
            <p className={styles.addressLabel}>House:</p>
            <input id="house" name="house" className={styles.input} />
          </div>
          <Button label="Order" type={'submit'} disabled={false} />
        </div>
      </div>
    </main>
  );
}

export default OrderSection;
