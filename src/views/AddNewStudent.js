import React from 'react';
import SelectCities from '../components/inputs/SelectCities.js';
import SelectDistricts from '../components/inputs/SelectDistricts.js';
import { useSelector } from 'react-redux';

const AddNewStudent = () => {
  const location = useSelector(state => state.LocationReducer.location);

  function handleButton () {
    console.log(location);
  }

  return (
    <div className='bg-[rgba(0,0,0,0.35)]	h-screen w-full fixed top-0 left-0'>
      <div className='bg-white w-1/3 rounded-lg mt-5 p-5 mx-auto'>
        <SelectCities />
        <SelectDistricts />
        <br/><br/><br/><br/>
        <button onClick={handleButton}>click</button>
      </div>
    </div>
  );
};

export default AddNewStudent;