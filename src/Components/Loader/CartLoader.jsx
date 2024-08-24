import React from 'react';
import './CartLoader.css';

const CartLoader = () => {
  return (
    <div className="preloader text-center h-auto">
      <svg className="cart mt-0 mr-auto mb-0 ml-auto" role="img" aria-label="Shopping cart line animation" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">
          <g className="cart__track" stroke="hsla(0,10%,10%,0.1)">
            <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
            <circle cx="43" cy="111" r="13" />
            <circle cx="102" cy="111" r="13" />
          </g>
          <g className="cart__lines" stroke="currentColor">
            <polyline className="cart__top" points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" strokeDasharray="338 338" strokeDashoffset="-338" />
            <g className="cart__wheel1" transform="rotate(-90,43,111)">
              <circle className="cart__wheel-stroke" cx="43" cy="111" r="13" strokeDasharray="81.68 81.68" strokeDashoffset="81.68" />
            </g>
            <g className="cart__wheel2" transform="rotate(90,102,111)">
              <circle className="cart__wheel-stroke" cx="102" cy="111" r="13" strokeDasharray="81.68 81.68" strokeDashoffset="81.68" />
            </g>
          </g>
        </g>
      </svg>
      <div className="preloader__text text-center mt-4">
        <p className="preloader__msg text-lg text-center mt-0 ml-auto mb-0 mr-auto ">Bringing you the goods…</p>
        <p className="preloader__msg preloader__msg--last text-lg mt-2">This is taking long. Something’s wrong.</p>
      </div>
    </div>
  );
};

export default CartLoader;
