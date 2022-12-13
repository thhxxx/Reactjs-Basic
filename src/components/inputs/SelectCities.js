import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleIDCity } from '../../reducers/LocationReducer.js';

const SelectCities = () => {
  const cities = useSelector(state => state.LocationReducer.cities);
  const dispatch = useDispatch();
  const [idCity, setIdCity] = useState('');
  const [cityName, setCityName] = useState('');

  function handleCity (event) {
    setIdCity(event.target.value);
    setCityName(event.target.selectedOptions[0].attributes.name ? event.target.selectedOptions[0].attributes.name.value : '');
  }

  useEffect(() => {
    dispatch(handleIDCity({ idCity, cityName }));
  }, [idCity]);

  return (
    <select className='border rounded-lg w-full h-12 px-3' onChange={handleCity}>
      <option value=''>-- Select city --</option>
      {
        cities.map(value => {
          return <option name={value.name_with_type} value={value.code} key={value._id}>
            {value.name}
          </option>;
        })
      }
    </select>
  );
};

export default SelectCities;