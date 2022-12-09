import React, { useEffect, useState } from 'react';
import { getAllCity, getAllDistrict } from '../APIs/addressAPI.js';

const AddStudent = () => {
  const [city, setCity] = useState('');
  /*--------------------*/
  const [listCity, setListCity] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  useEffect(() => {
    getAllCity().then(data => {
      setListCity(data);
    });
  }, []);

  useEffect(() => {
    getAllDistrict(city).then(data => {
      setListDistrict(data);
    });
  }, [city]);

  return (
    <div>
      <div className='w-2/5 p-5 border rounded-lg mt-5'>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <input type='text' className='border rounded-lg w-full h-12 px-3' placeholder='Name' />
          </div>
          <div>
            <input type='text' className='border rounded-lg w-full h-12 px-3' placeholder='Name' />
          </div>
          <div>
            <input type='text' className='border rounded-lg w-full h-12 px-3' placeholder='Number' />
          </div>
          <div>
            <select
              onChange={event => setCity(event.target.value)}
              className='border rounded-lg w-full h-12 px-3'>
              <option value=''>-- Select City --</option>
              {
                listCity.map(value => {
                  return <option value={value.code} key={value.code}>{value.name}</option>;
                })
              }
            </select>
          </div>
          <div>
            <select className='border rounded-lg w-full h-12 px-3'>
              <option value=''>-- Select District --</option>
              {
                listDistrict && listDistrict.map(value => {
                  return <option value={value.code} key={value.code}>{value.name_with_type}</option>;
                })
              }
            </select>
          </div>
          <div>
            <select className='border rounded-lg w-full h-12 px-3'>
              <option value=''>-- Select Ward --</option>
            </select>
          </div>
          <div className='col-start-1	col-end-3'>
            <input type='text' className='border rounded-lg w-full h-12 px-3' placeholder='Address' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;