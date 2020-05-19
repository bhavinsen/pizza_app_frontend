import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL;

class CartService {
  createCart() {
    return axios
      .post(API_URL + 'carts', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: authHeader(),
        },
      })
      .then((response) => {
        if (response.data.cartToken) {
          localStorage.setItem('cart', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  addProduct(productId) {
    const {cartKey, cartToken} = this.getCart();
    return axios
      .post(API_URL + 'carts/' + cartToken + '/', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: authHeader(),
        },
        body: JSON.stringify({cartKey: cartKey, productID: productId, quantity: 1}),
      })
      .then((response) => {
        return response.data;
      });
  }

  showCart() {
    const {cartToken, cartKey} = this.getCart();
    return axios
      .get(API_URL + 'carts/' + cartToken + '/?cartKey=' + cartKey, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  removeItem() {
    const {cartToken} = this.getCart();
    return axios
      .delete(API_URL + 'cartitems/' + cartToken, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  getCart() {
    return localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : null;
  }
}

export default new CartService();
