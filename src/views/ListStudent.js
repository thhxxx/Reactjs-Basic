import React, { useState } from 'react';
import AddNewStudent from './AddNewStudent.js';

const ListStudent = () => {

  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsShow(true)}
        className='text-white rounded-full bg-lime-600 px-5 py-2.5'>
        Add New Student
      </button>
      {isShow && <AddNewStudent />}
    </div>
  );
};

export default ListStudent;