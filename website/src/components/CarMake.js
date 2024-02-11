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
              <label htmlFor={`make-${make}`} className="make-label">
                <input
                  type="checkbox"
                  id={`make-${make}`}
                  value={make}
                  checked={checkedMake.includes(make)}
                  onChange={() => handleMakeCheckboxClick(make)}
                  style={{ marginRight: '5px' }}
                />
                 {make === 'Toyota' && <Link to="/Login">{make}</Link>}
                 {make === 'Honda' && <Link to="/">{make}</Link>}
                 {make === 'BMW' && <Link to="/">{make}</Link>}
                 {make === 'Tesla' && <Link to="/">{make}</Link>}
                 {make === 'Chevrolet' && <Link to="/">{make}</Link>}
                 {make === 'Ford' && <Link to="/">{make}</Link>}
              </label>
            </div>
          ))}
          <div className="search">
            <button onClick={handleMakeClearClick} style={{ marginLeft: '10px' }}>
              <p>Clear</p>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default CarMake;
