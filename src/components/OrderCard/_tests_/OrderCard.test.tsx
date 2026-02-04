import userEvent from '@testing-library/user-event'
import { OrderCard } from '../OrderCard'
import { it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../store/index'
import { addToCart } from '../../../store/cartSlice'


import { renderWithStore } from '../../../test/renderWithStore'

import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { addItem } from './cartSlice'
import Cart from './Cart'

test('показывает товар в пустой корзине', async () => {
  // 1. создаём стор
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState: {
      cart: {
        items: [],
      },
    },
  })

  // 2. рендерим компонент
  render(
    <Provider store={store}>
      <OrderCard />
    </Provider>
  )

  // 3. убеждаемся, что корзина пустая
  expect(screen.getByText(/USD/i)).not.toBeInTheDocument()

  // 4. добавляем товар
  store.dispatch(
        addToCart({
            id: '1',
            name: 'Grietine',
            price: '$ 7.22 USD',
            image: '',
            quantity: 5
    })
  )

  // 5. проверяем, что товар появился
  expect(await screen.findByText('Grietine')).toBeInTheDocument()
})



/*test('компонент отображается корректно при загрузке', () => {
  render(
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );

  // Проверяем, что сам компонент (например, заголовок или кнопка) виден
  expect(screen.getByRole('heading', { name: /Мой компонент/i })).toBeInTheDocument();
});*/


/*let mockMeal = {
  id: '1',
  name: 'Grietine',
  price: '$ 7.22 USD',
  image: '',
  quantity: 5
};

store.dispatch(addToCart(mockMeal))

describe('Cart', () => {
    it('delete all such items', async () => {
        render (<Provider store={store}>
                <OrderCard {...mockMeal} />
            </Provider>)


        const deleter = screen.getByRole('button', {name: /X/i})
        await userEvent.click(deleter)
        expect(screen.queryByText('$ 7.22 USD')).not.toBeInTheDocument()


    }) 
})*/