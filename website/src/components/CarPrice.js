import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const CarPrice = ({ checkedPrices, handlePriceCheckboxClick, handlePricesClearClick, priceDropdown, toggleDropdown }) => {
  return (
    <li>
      <div className="arrow-container">
        <h3 onClick={() => toggleDropdown('price')}>
          <p>Price</p>
          {priceDropdown ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
        </h3>
      </div>
      {priceDropdown && (
        <div className="dropdown-content">
          {['$0,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 & up'].map((price) => (
            <div key={price}>
              <label htmlFor={`price-${price}`} className="price-label">
                <input
                  type="checkbox"
                  id={`price-${price}`}
                  value={price}
                  checked={checkedPrices.includes(price)}
                  onChange={() => handlePriceCheckboxClick(price)}
                  style={{ marginRight: '15px' }}
                />
                <span>{price}</span>
              </label>
            </div>
          ))}
          <div className="search">
            <button onClick={handlePricesClearClick} style={{ marginLeft: '10px' }}>
              <p>Clear</p>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};


export default CarPrice;

