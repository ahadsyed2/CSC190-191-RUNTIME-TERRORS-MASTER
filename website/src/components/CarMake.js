import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const CarMake = ({ makeOptions, checkedMake, handleMakeCheckboxClick, handleMakeSearchClick, handleMakeClearClick, makeDropdown, toggleDropdown }) => {
  return (
    <li>
      <div className="arrow-container">
      <h3 onClick={() => toggleDropdown('make')}>
          <p>Make</p>
          {makeDropdown ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
        </h3>
      </div>
      {makeDropdown && (
        <div className="dropdown-content">
          {makeOptions.map((make) => (
            <div key={make}>
              <label htmlFor={`make-${make}`} className="model-label">
                <input
                  type="checkbox"
                  id={`make-${make}`}
                  value={make}
                  checked={checkedMake.includes(make)}
                  onChange={() => handleMakeCheckboxClick(make)}
                  style={{ marginRight: '5px' }}
                />
                 <span>{make}</span>
              </label>
            </div>
          ))}
          <div className="search">
            <button className="make-clear-button" onClick={handleMakeClearClick} style={{ marginLeft: '10px' }}>
              <p>Clear</p>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};


export default CarMake;

