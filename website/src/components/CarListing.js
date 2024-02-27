import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CarSearchBar from './CarSearchBar'; 


const CarListing = () => {

  
  const carList = [    
    { make: 'Toyota', name: 'Camry' },
    { make: 'Toyota', name: 'Corolla' },
    { make: 'Toyota', name: 'Prius' },
    { make: 'Toyota', name: 'RAV4' },
  
    { make: 'Honda', name: 'Accord' },
    { make: 'Honda', name: 'Civic' },
    { make: 'Honda', name: 'CR-V' },
    { make: 'Honda', name: 'Odyssey' },
  
    { make: 'BMW', name: 'X1' },
    { make: 'BMW', name: 'X3' },
    { make: 'BMW', name: 'X5' },
    { make: 'BMW', name: 'M3' },
  
    { make: 'Tesla', name: 'Model 3' },
    { make: 'Tesla', name: 'Model Y' },
    { make: 'Tesla', name: 'Model X' },
    { make: 'Tesla', name: 'Model S' },
  
    { make: 'Chevrolet', name: 'Silverado' },
    { make: 'Chevrolet', name: 'Malibu' },
    { make: 'Chevrolet', name: 'Equinox' },
    { make: 'Chevrolet', name: 'Camaro' },
  
    { make: 'Ford', name: 'Fusion' },
    { make: 'Ford', name: 'Escape' },
    { make: 'Ford', name: 'Mustang' },
    { make: 'Ford', name: 'Explorer' },
  ];


  return (
    <div>
      {/*CarSearchBar component will receive the carList as a prop, 
      allowing it to filter and display the search results based on the provided car data.*/}
      <CarSearchBar carList={carList} />
    </div>
  );
};

export default CarListing;