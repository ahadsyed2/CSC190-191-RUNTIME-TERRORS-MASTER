import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CarSearchBar = ({ carList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleCarClick = (carName) => {
    navigate(`/car/${carName.toLowerCase()}`);
  };

  const generateCarLink = (carName) => {
    const formattedCarName = carName.replace(/\s+/g, '').toLowerCase();
    if (formattedCarName === 'camry') {
      return '/AboutCarmony';
    } else if (formattedCarName === 'corolla') {
      return '/corollaPage';
    } else if (formattedCarName === 'Prius') {
      return '/priusPage';
    } else if (formattedCarName === 'RAV4') {
      return '/rav4Page';
    } else if (formattedCarName === 'Accord') {
      return '/accordPage';
    } else if (formattedCarName === 'Civic') {
      return '/civicPage';
    } else if (formattedCarName === 'CR-V') {
      return '/CRvPage';
    } else if (formattedCarName === 'Odyssey') {
      return '/odysseyPage';
    } else if (formattedCarName === 'X1') {
      return '/bmwX1Page';
    } else if (formattedCarName === 'X3') {
      return '/bmwX3Page';
    } else if (formattedCarName === 'X5') {
      return '/bmwX5Page';
    } else if (formattedCarName === 'M3') {
      return '/bmwM3Page';
    } else if (formattedCarName === 'Model 3') {
      return '/teslaM3Page';
    } else if (formattedCarName === 'Model Y') {
      return '/teslaMYPage';
    } else if (formattedCarName === 'Model X') {
      return '/teslaMXPage';
    } else if (formattedCarName === 'Model S') {
      return '/teslaMSPage';
    } else {
      return `/car/${formattedCarName}`;
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredResults = carList.filter((car) =>
      car.name.toLowerCase().includes(term.toLowerCase()) ||
      car.make.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);

  };

  return (
<div className="relative" >
  <input
    type="text"
    placeholder="Search for cars ..."
    value={searchTerm}
    onChange={handleSearch}
    className="py-2 px-4 mb-4 mt-8 block w-full leading-5 border-2 border-gray-300 rounded-2xl shadow-lg transition duration-150 ease-in-out text-xl sm:leading-7" 
  />
  {searchTerm && (
    <ul className="absolute mt-2 bg-white rounded-md shadow-lg w-full" >
      {searchResults.map((car, index) => (
        <li
          key={index}
          className="py-2 px-4 text-lg cursor-pointer hover:bg-gray-200"
        >
          <Link to={generateCarLink(car.name)} className="no-underline text-gray-800">
            {car.make} - {car.name}
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>


  );
};


export default CarSearchBar;

