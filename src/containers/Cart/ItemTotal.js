import React from 'react';

const ItemTotal = ({total}) => (
  <div className="container">
      <ul className="collection">
          <li className="collection-item">
             <b>Total {total}$</b>
          </li>
      </ul>
      <div className="checkout">
           <button className="waves-effect waves-light btn">Checkout</button>
      </div>
  </div>
);

export default ItemTotal;