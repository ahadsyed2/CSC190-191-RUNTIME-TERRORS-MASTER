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
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search for cars ..."
        value={searchTerm}
        onChange={handleSearch}
        style={styles.input}
      />
      {searchTerm && (
        <ul style={styles.list}>
          {searchResults.map((car, index) => (
            <li key={index} style={styles.listItem}>
              <Link to={generateCarLink(car.name)} style={styles.link}>
                {car.make} - {car.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};


const styles = {
  container: {
    margin: '1px',
    width: '100%',
    position: 'sticky',
    top: 0, 
    zIndex: 1, /* Set a z-index value */
    marginBottom: '1rem',

  },
  input: {
    padding: '12px',
    fontSize: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '10px',
    position: 'absolute',
    left: 0,
    top: '100%',
    width: '100%',
    backgroundColor: '#fff', 
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    zIndex: 1,
  },
  listItem: {
    padding: '12px',
    margin: '5px 0',
    borderRadius: '5px',
    fontSize: '20px',
    cursor: 'pointer',

  },
  link: {
    textDecoration: 'none',
    color: 'inherit', // Inherit the color from the parent
  },
};

export default CarSearchBar;