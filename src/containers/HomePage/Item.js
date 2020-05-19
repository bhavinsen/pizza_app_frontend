import React from 'react';

import {CartTitle, CardContent} from '../../components/Card';
import {CardStyle, CardActionStyle} from './styled';

const Item = ({product, addToCart}) => (
  <CardStyle>
    <CartTitle>
      <img src={product.slug} alt={product.name} />
      <span className="card-title">{product.name}</span>
    </CartTitle>
    <CardContent>
      <p>{product.detail}</p>
      <p>
        <b>Price {product.price}$</b>
      </p>
    </CardContent>
    <CardActionStyle>
      <button onClick={addToCart} className="btn waves-effect waves-light" type="button" name="action">
        Add to cart
        <i className="material-icons right">shopping_cart</i>
      </button>
    </CardActionStyle>
  </CardStyle>
);

export default Item;
