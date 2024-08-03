import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import avatar from '../assets/user-avatar.jpg';

function EmpDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/employees/${id}`)
      .then((res) => res.json())
      .then((res) => setEmployee(res))
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <div className='w-full p-8'>
      <div className="w-6/12 mx-auto border border-slate-500 rounded-lg shadow p-5 text-slate-700">
        <h2 className='font-bold text-2xl text-center'>Employee Details</h2>
        <div className='flex gap-5 justify-evenly my-5'>
          <div className=''>
            <img src={avatar} alt="EmployeeImg" className='w-[150px] h-[150px] rounded-full' title='Profile Pick' />
          </div>
          <div className='flex flex-col gap-2 mt-4 font-semibold text-lg text-slate-700' >
            <p>Employee Name: <span className='font-bold text-xl text-red-500'>{employee.name}</span></p>
            <p>Employee Email: <span className='font-bold text-xl text-red-500'>{employee.email}</span></p>
            <p>Employee Phone: <span className='font-bold text-xl text-red-500'>{employee.phone}</span></p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/" className='py-1.5 px-4 rounded-md bg-slate-700 text-white'>Back to Listing</Link>
        </div>
      </div>
    </div>
  )
}

export default EmpDetail