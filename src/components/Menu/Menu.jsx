import styles from './Menu.module.css'
import { Button } from '../Button'
import { Card } from '../Cart/Card'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals } from '../../store/mealsSlice';

function filteredMeals (meals, selectedCategory) {
    let filteredMeals = meals.filter(meal => meal.category === selectedCategory)
    return filteredMeals;
};

export function Menu () {

    const log = useSelector(state => state.auth.log)

    console.log(log)

    const dispatch = useDispatch();
    const { items: meals, loading, error } = useSelector(state => state.meals);

    useEffect (() => {
        dispatch(fetchMeals());
    }, [dispatch]);
    
    const [visibleCount, setVisibleCount] = useState(6);
    const handleShowMore = () => setVisibleCount(prev => prev + 6);
    const [selectedCategory, setSelectedCategory] = useState('Dessert');
    const categories = [...new Set(meals.map(item => item.category))];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setVisibleCount(6);
    };

    const visibleMeals = filteredMeals(meals, selectedCategory).slice(0, visibleCount);

    if (loading) return <p>Loading meals...</p>;
    if (error) return <p>Error: {error}</p>;



    
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <p className={styles.pageTitle}>
                        Browse our menu
                    </p>
                    <p className={styles.menuDescription}>
                        Use our menu to place an order online, or <span className={styles.phone}>phone<a href="tel:+3706229848" className={styles.phoneTooltip}>+370 622 9848</a></span>  our store to place a pickup order. Fast and fresh food.
                    </p>
                </div>
                <div className={styles.buttonBlock}>
                    {categories.map((cat) => (
                        <Button key={cat} label={cat}                      
                        onClick={() => handleCategorySelect(cat)}
                        current = {selectedCategory === cat ? true : false }
                        />
                    ))}
                </div>
                <div className={styles.cartBlock}>
                    {visibleMeals.map((meal) => (
                        <Card key={meal.id} id={meal.id} name={meal.meal} category={meal.category} description={meal.instructions} price = {`$ ${meal.price} USD`} goodsNumber='1' image = {meal.img}/>           
                    ))}
                </div>
                {visibleCount < filteredMeals(meals, selectedCategory).length && (
                    <Button label="See more" onClick={handleShowMore} />
                )}
            </div>
        </main>
    )
}

export default Menu