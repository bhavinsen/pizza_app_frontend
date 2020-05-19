import React, {useState, useEffect} from 'react';

import Loader from '../../components/PreLoader';

import CartService from '../../services/cart.service';
import {CartDiv} from './styled';
import Item from './Item';
import ItemTotal from './ItemTotal';

const Cart = () => {
  const [cart, setCart] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    if (CartService.getCart()) {
      setLoading(true);
      CartService.showCart().then((response) => {
        if (response.items) {
          setCart(response.items);
          let t = 0;
          response.items.map((item) => (t = t + item.price * item.quantity));
          setTotal(t);
        }
        setLoading(false);
      });
    }
  };

  const removeCart = (id) => {
    
  }

  return (
    <div className="container">
      <Loader active={loading} />
      <CartDiv className="cart">
        {cart && cart.length > 0 ? (
          <h5>You have ordered:</h5>
        ) : (
          <h5>Your cart is empty.</h5>
        )}

        <ul className="collection">
          {cart &&
            cart.map((item) => {
              return <Item key={item.sku} item={item} handleRemove={ () => removeCart(item.id)}/>;
            })}
        </ul>
      </CartDiv>
      {cart && cart.length && <ItemTotal total={total} />}
    </div>
  );
};

export default Cart;
