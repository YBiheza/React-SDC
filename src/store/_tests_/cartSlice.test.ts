import cartReducer, { addToCart, updateQuantity, deleteItem } from '../cartSlice'
import type { TCartItem } from '../TCartSlice'

describe('cartSlice', () => {
    const item: TCartItem = {
        id: '1',
        name: 'Sandwich',
        price: '4',
        image: '',
        quantity: 3,
    }

    const item2: TCartItem = {
        id: '2',
        name: 'Burger',
        price: '5',
        image: '',
        quantity: 2,
    }

    const item3: TCartItem = {
        id: '3',
        name: 'Pizza',
        price: '6',
        image: '',
        quantity: 1,
    }

    it('add new item to the empty cart', () => {
        const initialState = { cartItems: [], count: 0 }
        const action = addToCart(item)
        const state = cartReducer(initialState, action)

        expect(state.cartItems).toHaveLength(1)
        expect(state.cartItems).toEqual([
        { ...item, quantity: 3 },
        ])    
    })

    it('add new item to the not empty cart', () => {
        const initialState = { cartItems: [item, item2], count: 5 }
        const action = addToCart(item3)
        const state = cartReducer(initialState, action)

        expect(state.cartItems).toHaveLength(3)
        expect(state.cartItems).toEqual([
            item,
            item2,
            { ...item3, quantity: 1 },
        ])    
    })

    it('increase quantity of the item at the cart', () => {
        const initialState = { cartItems: [item], count: 3 }
        const action = updateQuantity({id: '1', quantity: 5})
        const state = cartReducer(initialState, action)

        expect(state.cartItems).toEqual([
        { ...item, quantity: 5 },
        ])    
    })

    it('decrease quantity of the item at the cart', () => {
        const initialState = { cartItems: [item], count: 3 }
        const action = updateQuantity({id: '1', quantity: 1})
        const state = cartReducer(initialState, action)

        expect(state.cartItems).toEqual([
        { ...item, quantity: 1 },
        ])    
    })

    it('delete items from the cart', () => {
        const initialState = { cartItems: [item], count: 3 }
        const action = deleteItem({id: '1'})
        const state = cartReducer(initialState, action)

        expect(state.cartItems).toHaveLength(0)   
    })
})