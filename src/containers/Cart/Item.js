import React from 'react';
import {Link} from 'react-router-dom';

import {Li, Img, SpanTitle, PText} from './styled';

const Item = ({item, handleRemove}) => (
  <Li className="collection-item avatar">
    <div className="item-img">
      <Img src={item.image} alt="" />
    </div>
    <div className="item-desc">
      <SpanTitle className="title">{item.name}</SpanTitle>
      <PText>{item.detail}</PText>
      <PText>
        <b>Price: {item.price * item.quantity}$</b>
      </PText>
      <PText>
        <b>Quantity: {item.quantity}</b>
      </PText>
      <div className="add-remove">
        <Link to="/cart">
          <i className="material-icons" onClick={() => {}}>
            arrow_drop_up
          </i>
        </Link>
        <Link to="/cart">
          <i className="material-icons" onClick={() => {}}>
            arrow_drop_down
          </i>
        </Link>
      </div>
      <button className="waves-effect waves-light btn teal remove" onClick={handleRemove}>Remove</button>
    </div>
  </Li>
);

export default Item;
