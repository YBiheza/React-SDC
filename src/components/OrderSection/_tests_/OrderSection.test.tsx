import userEvent from '@testing-library/user-event'
import { OrderSection } from '../OrderSection'
import { it, expect } from '@jest/globals'
import { render, screen, within } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../store/index'
import cartReducer, { addToCart } from '../../../store/cartSlice'
import { configureStore } from '@reduxjs/toolkit'

test('item add to the empty cart', async () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState: {
      cart: {
        cartItems: [],
        count: 0,
      },
    },
  })

  render(
    <Provider store={store}>
      <OrderSection />
    </Provider>
  )

  expect(screen.queryByTestId(/cart-badge/i)).not.toBeInTheDocument();

  store.dispatch(
        addToCart({
            id: '1',
            name: 'Grietine',
            price: '$ 7.22 USD',
            image: '',
            quantity: 5
    })
  )

  expect(await screen.findByText('Grietine')).toBeInTheDocument()
})

test('item delete from the cart', async () => {
  const store = configureStore ({
    reducer: {
      cart: cartReducer
    },
    preloadedState: {
      cart: {
        cartItems: [],
        count: 0,
      },
    },
  })

  render(
    <Provider store={store}>
      <OrderSection />
    </Provider>
  )

  expect(screen.queryByTestId(/cart-badge/i)).not.toBeInTheDocument();

  store.dispatch(
    addToCart({
      id: '1',
      name: 'Grietine',
      price: '$ 7.22 USD',
      image: '',
      quantity: 5
    })
  )

  store.dispatch(
    addToCart({
      id: '3',
      name: 'Vandens',
      price: '$ 3 USD',
      image: '',
      quantity: 2
    })
  )

  expect(await screen.findByText('Grietine')).toBeInTheDocument()
  expect(await screen.findByText('Vandens')).toBeInTheDocument()
  screen.logTestingPlaygroundURL()


  const itemName = await screen.findByText('Vandens')
  const item = itemName.closest('[data-testid="cancel-block-badge"]')!
  //const deleter = within(item!).getByRole('button', {name: /X/i} )
  const deleter = within(item).getByRole('button')
  await userEvent.click(deleter)

  expect(await screen.queryByText('Vandens')).not.toBeInTheDocument();
  expect(await screen.findByText('Grietine')).toBeInTheDocument();
}
)

test('change the quantity by input', async () => {
  const user = userEvent.setup()

  const store = configureStore({
    reducer: {
      cart: cartReducer
    },
    preloadedState: {
      cart: {
        cartItems: [],
        count: 0,
      }
    }
  })

  render(
    <Provider store={store}>
      <OrderSection />
    </Provider>
  )

  store.dispatch(
    addToCart({
      id: '3',
      name: 'Vandens',
      price: '$ 3 USD',
      image: '',
      quantity: 2
    })
  )

  store.dispatch(
    addToCart({
      id: '1',
      name: 'Suris',
      price: '$ 2 USD',
      image: '',
      quantity: 3
    })
  )

  expect(await screen.findByText('Suris')).toBeInTheDocument()
  expect(await screen.findByText('Vandens')).toBeInTheDocument()

  const item = await screen.findByText('Vandens')
  const block = item.closest('[data-testid="cancel-block-badge"]')!
  const input = within(block).getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '8')

  expect(input).toHaveValue(8)
  expect(store.getState().cart.cartItems[0]?.quantity).toBe(8)
  expect(store.getState().cart.count).toBe(11)



})