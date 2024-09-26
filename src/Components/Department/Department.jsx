import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Department() {

  const [departments, setDepartments] = useState([{ name: '', students: '' }]);
  const addDepartment = () => {
    setDepartments([...departments, { name: '', students: '' }]);
  };

  const removeDepartment = (index) => {
    const updatedDepartments = departments.filter((_, i) => i !== index);
    setDepartments(updatedDepartments);
  };
  const handleDepartmentChange = (index, field, value) => {
    const updatedDepartments = [...departments];
    updatedDepartments[index][field] = value;
    setDepartments(updatedDepartments);
  };
  return (
    <div>
      <h2 className='text-4xl py-10 font-semibold text-center max550:px-1'>All Departments and Students Count</h2>
        <div className='flex flex-col px-[5%] gap-6 justify-center align-middle w-[60%] mx-auto h-auto overflow-y-scroll pb-10 max550:w-full'>
          
          {departments.map((department, index) => (
            <div key={index} className='flex gap-4'>
              <input
                type='text'
                placeholder={`Department Name ${index + 1}`}
                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px] w-full'
                value={department.name}
                onChange={(e) => handleDepartmentChange(index, 'name', e.target.value)}
              />
              <input
                type='number'
                placeholder={`No. of Students`}
                className='bg-transparent border border-slate-400 w-[30%] rounded-[5px] px-4 py-[9px]'
                value={department.students}
                onChange={(e) => handleDepartmentChange(index, 'students', e.target.value)}
              />
              <button 
                className='text-red-500'
                onClick={() => removeDepartment(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button 
            className='text-white bg-[#FC661A] rounded-[5px] py-[10px] px-4 active:bg-[#D94F12] transition duration-150 ease-in-out'
            onClick={addDepartment}>
            Add Department
          </button>
          <div className='flex mt-10 justify-center mx-auto w-[50%]'>
          <Link to='/Landing' className='text-center text-white bg-[#FC661A] rounded-[5px] py-[10px] w-[90%] active:bg-[#D94F12] transition duration-150 ease-in-out text-[18px]'>
            Signup
          </Link>
    </div>
        </div>
    </div>
  )
}

export default Department;
