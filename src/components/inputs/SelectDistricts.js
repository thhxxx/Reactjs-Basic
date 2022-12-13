import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleIDDistrict } from '../../reducers/LocationReducer.js';

const SelectDistricts = () => {
  const districts = useSelector(state => state.LocationReducer.districts);
  const location = useSelector(state => state.LocationReducer.location);
  const dispatch = useDispatch();
  const filterDistricts = districts.filter(value => value.parent_code === location.id_city);
  const [idDistrict, setIdDistrict] = useState('');
  const [districtName, setDistrictName] = useState('');

  function handleDistrict (event) {
    setIdDistrict(event.target.value);
    setDistrictName(event.target.selectedOptions[0].attributes.name ? event.target.selectedOptions[0].attributes.name.value : '');
  }

  useEffect(() => {
    dispatch(handleIDDistrict({ idDistrict, districtName }));
  }, [idDistrict]);

  useEffect(() => {
    setIdDistrict('');
    setDistrictName('');
  }, [location.id_city]);

  return (
    <select className='border rounded-lg w-full h-12 px-3' onChange={handleDistrict}>
      <option value=''>-- Select district --</option>
      {
        filterDistricts.map(value => {
          return <option name={value.name_with_type} value={value.code} key={value._id}>
            {value.name_with_type}
          </option>;
        })
      }
    </select>
  );
};

export default SelectDistricts;