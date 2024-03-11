import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const CarMileage = ({ checkedMileages, handleMileageCheckboxClick, handleMileageClearClick, mileageDropdown, toggleDropdown }) => {
  return (
    <li>
      <div className="arrow-container">
        <h3 onClick={() => toggleDropdown('mileage')}>
          <p>Mileage</p>
          {mileageDropdown ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
        </h3>
      </div>
      {mileageDropdown && (
        <div className="dropdown-content">
          {['0 - 25,000 miles', '25,000 - 75,000 miles', 
                      '75,000 - 125,000 miles', '125,000 miles & up'].map((mileage) => (
            <div key={mileage}>
              <label htmlFor={`mileage-${mileage}`} className="mileage-label">
                <input
                  type="checkbox"
                  id={`mileage-${mileage}`}
                  value={mileage}
                  checked={checkedMileages.includes(mileage)}
                  onChange={() => handleMileageCheckboxClick(mileage)}
                  style={{ marginRight: '5px' }}
                />
                {mileage === '0 - 25,000 miles' && <Link to="/">{mileage}</Link>}
                {mileage === '25,000 - 75,000 miles' && <Link to="/">{mileage}</Link>}
                {mileage === '75,000 - 125,000 miles' && <Link to="/">{mileage}</Link>}
                {mileage === '125,000 miles & up' && <Link to="/">{mileage}</Link>}
              </label>
            </div>
          ))}
          <div className="search">
            <button onClick={handleMileageClearClick} style={{ marginLeft: '10px' }}>
              <p>Clear</p>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};


export default CarMileage;

