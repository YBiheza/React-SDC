import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';

export function Layout () {

    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = (count = 1) => {
        setCartCount(prev => Number(prev) + Number(count));
    };


    return (
        <>
            <Header quantityOfGoods={cartCount}/>
            <main>
                <Outlet context={{ onAddToCart: handleAddToCart }}/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout