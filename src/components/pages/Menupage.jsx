import { Header } from '../Header'
import { Menu } from '../Menu'
import { Footer } from '../Footer'

export function Menupage () {

    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = (count = 1) => {
        setCartCount(prev => Number(prev) + Number(count));
    };


    return (
        <>
            <Header currPage = 'Menu' quantityOfGoods={cartCount}/>
            <Menu onAddToCart = {handleAddToCart}/>
            <Footer/>
        </>
    )
}
