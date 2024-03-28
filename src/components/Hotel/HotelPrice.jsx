import React from 'react';

import { CgFormatSlash } from 'react-icons/cg';

const HotelPrice = ({ price }) => {
  return (
    <div className="hotel__price">
      <strong>₩ {price}</strong>
      <CgFormatSlash />
      <span>1박</span>
    </div>
  );
};

export default HotelPrice;
