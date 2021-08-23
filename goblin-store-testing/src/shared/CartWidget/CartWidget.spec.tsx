import React from 'react';
import { fireEvent, getByRole } from "@testing-library/react";
import { CartWidget } from './CartWidget'

describe("CartWidget", () => {
  it("navigates to cart summary page on click", () => {
    const { getByRole, history } = renderWithRouter(() => (
      <CartWidget />
    ))

    fireEvent.click(getByRole("link"))

    expect(history.location.pathname).toEqual("/cart")
  })

  it("shows the amount of products in the cart", () => {
    const stubCartHook = () => ({
      products : [
        {
          name: "Product foo",
          price: 0,
          image: "image.png"
        }
      ],
    })

    const { container } = renderWithRouter(() =>(
      <CartWidget useCartHook={stubCartHook} />
    ))
  })
})