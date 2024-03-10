import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const carYear = ({ checkedYears, handleYearCheckboxClick, handleYearClearClick, yearsDropdown, toggleDropdown }) => {
  return (
    <li>
      <div className="arrow-container">
      <h3 onClick={() => toggleDropdown('years')}>
          <p>Years</p>
          {yearsDropdown ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
        </h3>
      </div>
      {yearsDropdown && (
        <div className="dropdown-content">
          {['2020-Today', '2010-2020', '2000-2010', '1990-2000', '1980-1990', '< 1980'].map((year) => (
            <div key={year}>
              <label htmlFor={`year-${year}`} className="year-label">
                <input
                  type="checkbox"
                  id={`year-${year}`}
                  value={year}
                  checked={checkedYears.includes(year)}
                  onChange={() => handleYearCheckboxClick(year)}
                  style={{ marginRight: '5px' }}
                />
                {year == '2020-Today' && <Link to="/">{year}</Link>}
                {year == '2010-2020' && <Link to="/">{year}</Link>}
                {year == '2000-2010' && <Link to="/">{year}</Link>}
                {year == '1990-2000' && <Link to="/">{year}</Link>}
                {year == '1980-1990' && <Link to="/">{year}</Link>}
                {year == '< 1980' && <Link to="/">{year}</Link>}
              </label>
            </div>
          ))}
          <div className="search">
            <button onClick={handleYearClearClick} style={{ marginLeft: '10px' }}>
              <p>Clear</p>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};


export default carYear;

