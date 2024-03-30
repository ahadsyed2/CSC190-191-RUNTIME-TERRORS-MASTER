import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CarSearchBar from './CarSearchBar'; 


const CarListing = () => {

  const toyotaOption = ['Tacoma', 'Crown', 'Prius', 'Corolla', 'Highlander', 'Sequoia', 'Tundra', 'RAV4'];
  const hondaOption = ['CR-V', 'Accord', 'Odyssey', 'Pilot', 'Civic', 'HRV', 'S2000', 'Ridgeline'];
  const mercedesOption = ['EQB', 'CLA', 'GLC', 'E-Class', 'C-Class', 'SL', 'GLA', 'GLB'];
  const teslaOption = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck', 'Roadster', 'Semi', 'Model 2'];
  const chevroletOption = ['Camaro', 'Corvette', 'Suburban', 'Silverado', 'Tahoe', 'Impala', 'Colorado', 'Bolt'];
  const fordOption = ['Mustang', 'F150', 'Escape', 'Transit', 'Explorer', 'Fiesta', 'Focus', 'F250'];
  const dodgeOption = ['Charger', 'Dart', 'Challenger', 'Dart', 'Durango', 'Ram 1500', 'Ram 2500', 'Ram 3500'];
  const hyundaiOption = ['Santa Fe', 'Sonata', 'Tucson', 'Palisade', 'Kona', 'Accent', 'Elantra', 'Venue'];
  const mazdaOption = ['2', '3', '6', 'speed3', 'MPV', 'Miata', 'RX-7', 'CX-5'];
  const kiaOption = ['Soul', 'Sorento', 'Forte', 'Stinger', 'Rio', 'Optima', 'Niro', 'Sportage'];
  const buickOption = ['Enclave', 'Encore', 'LaCrosse', 'Riviera', 'Regal', 'Sportback', 'LeSabre', 'Cascada'];
  const jeepOption = ['Compass', 'Gladiator', 'Renegade', 'Wagoneer', 'Cherokee', 'Wrangler', 'Grand Cherokee', 'Avenger'];
  const bmwOption = ['M5', 'M2', 'Z4', 'X1', 'XM', '2 Series', '5 Series', '7 Series'];
  const nissanOption = ['Altima', 'Rogue', 'Maxima', 'Leaf', 'Sentra', 'Murano', 'GTR', 'Pathfinder'];
  const volkswagenOption = ['Golf GTI', 'Gold R', 'Taos', 'Jetta', 'Atlas', 'Arteon', 'Tiguan', 'Beetle'];
  const cadillacOption = ['CT4', 'Escalade', 'XT5', 'CTS', 'XLR', 'XT6', 'XT5', 'Seville'];

  
  const carList = [    
    { make: 'Toyota', name: 'Camry' },
    { make: 'Toyota', name: 'Corolla' },
    { make: 'Toyota', name: 'Prius' },
    { make: 'Toyota', name: 'RAV4' },
    { make: 'Toyota', name: 'Tacoma' },
    { make: 'Toyota', name: 'Highlander' },
    { make: 'Toyota', name: 'Sequoia' },
    { make: 'Toyota', name: 'Tundra' },
  
    { make: 'Honda', name: 'Accord' },
    { make: 'Honda', name: 'Civic' },
    { make: 'Honda', name: 'CR-V' },
    { make: 'Honda', name: 'Odyssey' },
    { make: 'Honda', name: 'Pilot' },
    { make: 'Honda', name: 'HRV' },
    { make: 'Honda', name: 'S2000' },
    { make: 'Honda', name: 'Ridgeline' },

    { make: 'Mercedes', name: 'EQB' },
    { make: 'Mercedes', name: 'CLA' },
    { make: 'Mercedes', name: 'GLC' },
    { make: 'Mercedes', name: 'E-Class' },
    { make: 'Mercedes', name: 'C-Class' },
    { make: 'Mercedes', name: 'SL' },
    { make: 'Mercedes', name: 'GLA' },
    { make: 'Mercedes', name: 'GLB' },
  
    { make: 'BMW', name: 'X1' },
    { make: 'BMW', name: 'X3' },
    { make: 'BMW', name: 'X5' },
    { make: 'BMW', name: 'M3' },
    { make: 'BMW', name: 'M2' },
    { make: 'BMW', name: 'Z4' },
    { make: 'BMW', name: 'X1' },
    { make: 'BMW', name: '7 series' },
  
    { make: 'Tesla', name: 'Model 3' },
    { make: 'Tesla', name: 'Model Y' },
    { make: 'Tesla', name: 'Model X' },
    { make: 'Tesla', name: 'Model S' },
    { make: 'Tesla', name: 'Cybertruck' },
    { make: 'Tesla', name: 'Semitruck' },
    { make: 'Tesla', name: 'Model 2' },
    { make: 'Tesla', name: 'Roadster' },
  
    { make: 'Chevrolet', name: 'Silverado' },
    { make: 'Chevrolet', name: 'Malibu' },
    { make: 'Chevrolet', name: 'Equinox' },
    { make: 'Chevrolet', name: 'Camaro' },
    { make: 'Chevrolet', name: 'Tahoe' },
    { make: 'Chevrolet', name: 'Suburban' },
    { make: 'Chevrolet', name: 'Corvette' },
    { make: 'Chevrolet', name: 'Silverado' },
    { make: 'Chevrolet', name: 'Impala' },
    { make: 'Chevrolet', name: 'Colorado' },
    { make: 'Chevrolet', name: 'Bolt' },
  
    { make: 'Ford', name: 'Fusion' },
    { make: 'Ford', name: 'Escape' },
    { make: 'Ford', name: 'Mustang' },
    { make: 'Ford', name: 'Explorer' },
    { make: 'Ford', name: 'F150' },
    { make: 'Ford', name: 'F250' },
    { make: 'Ford', name: 'Fiesta' },
    { make: 'Ford', name: 'Transit' },

    { make: 'Dodge', name: 'Fusion' },
    { make: 'Dodge', name: 'Escape' },
    { make: 'Dodge', name: 'Mustang' },
    { make: 'Dodge', name: 'Explorer' },
    { make: 'Dodge', name: 'F150' },
    { make: 'Dodge', name: 'F250' },
    { make: 'Dodge', name: 'Fiesta' },
    { make: 'Dodge', name: 'Transit' },
  ];


  return (
    <div>
      <CarSearchBar carList={carList} />
    </div>
  );
};

export default CarListing;
