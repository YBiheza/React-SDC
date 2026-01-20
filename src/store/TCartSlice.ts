type TCartItem = {
    id: string,
    name: string, 
    price: string,
    image: string,
    quantity: number
}

type TInitialCart = {
    cartItems: TCartItem[];
    count: number
}

export type { TCartItem, TInitialCart }