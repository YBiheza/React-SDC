import userEvent from '@testing-library/user-event'
import { Card } from '../Card'
import { it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../store/index'


const mockMeal = {
  id: '1',
  name: 'Pizza',
  category: 'Dessert',
  description: 'Very tasty',
  price: '$ 10 USD',
  image: '',
}


describe ('Cart', () => {
    it('users add item with selected quantity', async () => {
        render (<Provider store={store}>
                <Card {...mockMeal} />
            </Provider>)

        const quantityInput = screen.getByRole('spinbutton')
        await userEvent.clear(quantityInput)
        await userEvent.type(quantityInput, '3')
        const addButton = screen.getByRole('button', {name: /Add to cart/i})
        await userEvent.click(addButton)
        expect(store.getState().cart.cartItems[0]?.quantity).toBe(3)
    }),

    it('renders with default quantity = 1', () => {
        render (<Provider store={store}>
                <Card {...mockMeal} />
            </Provider>)

        expect(
            screen.getByRole('spinbutton')
        ).toHaveValue(1)
    })


})