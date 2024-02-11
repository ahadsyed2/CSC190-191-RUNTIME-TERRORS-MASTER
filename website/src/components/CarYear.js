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
          {[2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
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
                {year == 2023 && <Link to="/Posting">{year}</Link>}
                {year == 2022 && <Link to="/Posting">{year}</Link>}
                {year == 2021 && <Link to="/Posting">{year}</Link>}
                {year == 2020 && <Link to="/Posting">{year}</Link>}
                {year == 2019 && <Link to="/Posting">{year}</Link>}
                {year == 2018 && <Link to="/Posting">{year}</Link>}
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
