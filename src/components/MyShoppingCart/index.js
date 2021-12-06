import React from 'react';

function MyShoppingCart(props) {
  const products = props.cart.map((ele, index) => {
      return (
        <li>{ele.name} {ele.price}</li>

      )
    })
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>{products}</ul>

    </div>
  );
}

export default MyShoppingCart;
