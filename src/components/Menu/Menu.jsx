import styles from './Menu.module.css'
import { Button } from '../Button'
import { Card } from '../Cart/Card'

import React, { useEffect, useState } from 'react';
import useFetch  from '../../hooks/useFetch'


function filteredMeals (meals, selectedCategory) {
    let filteredMeals = meals.filter(meal => meal.category === selectedCategory)
    return filteredMeals;
};

export function Menu ({ onAddToCart }) {
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState('Dessert');

    const [meals, loading, error] = useFetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
    
    if (loading) return <p>Loading meals...</p>;
    if (error) return <p>Error: {error}</p>;

    const visibleMeals = filteredMeals(meals, selectedCategory).slice(0, visibleCount);
    const categories = [...new Set(meals.map(item => item.category))];

    const handleShowMore = () => setVisibleCount(prev => prev + 6);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setVisibleCount(6);
    };
    
    
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
                        <Card key={meal.id} name={meal.meal} onAddToCart={onAddToCart} category={meal.category} description={meal.instructions} price = {`$ ${meal.price} USD`} goodsNumber='1' image = {meal.img}/>           
                    ))}
                </div>
                {visibleCount < filteredMeals(meals, selectedCategory).length && (
                    <Button label="See more" onClick={handleShowMore} />
                )}
            </div>
        </main>
    )
}