import React from 'react';

const ItemTotal = ({total, onclick}) => (
  <div className="container">
      <ul className="collection">
          <li className="collection-item">
             <b>Total {total}$</b>
          </li>
      </ul>
      <div className="checkout">
          <button className="waves-effect waves-light btn" onClick={onclick}>Checkout</button>
      </div>
  </div>
);

export default ItemTotal;