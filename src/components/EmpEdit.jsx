import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EmpEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    fetch(`http://localhost:8080/employees/${id}`)
      .then((res) => res.json())
      .then((res) => setEmployee(res))
      .catch((err) => console.log(err.message))
  }, [])

  const handleInputs = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/employees/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(employee)
    }).then(() => {
      alert("Edit Successfully ..");
      navigate("/");
    }).catch((err) => console.log(err.message))
  }

  return (
    <div className='w-full p-8'>
      <div className="w-6/12 mx-auto border border-slate-500 rounded-lg shadow p-5 text-slate-700">
        <h2 className='font-bold text-2xl text-center'>Employee Edit</h2>
        <form
          onSubmit={handleSubmit}
          className='w-10/12 mx-auto  flex flex-col gap-4'>
          <div className=''>
            <label
              htmlFor="name"
              className='block text-xl'
            >Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={employee.name}
              onChange={handleInputs}
              className='block w-full outline-none border-2 border-slate-500 px-4 py-1.5 rounded-md'
            />
          </div>
          <div className=''>
            <label
              htmlFor="email"
              className='block text-xl'
            >Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={employee.email}
              onChange={handleInputs}
              className='block w-full outline-none border-2 border-slate-500 px-4 py-1.5 rounded-md'
            />
          </div>
          <div className=''>
            <label
              htmlFor="phone"
              className='block text-xl'
            >Phone:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={employee.phone}
              required
              onChange={handleInputs}
              className='block w-full outline-none border-2 border-slate-500 px-4 py-1.5 rounded-md'
            />
          </div>
          <div className=' flex gap-4'>
            <button className='px-4 py-1.5 bg-green-500 hover:bg-green-700 rounded-md text-white'>Edit</button>
            <Link to="/" className='px-4 py-1.5 bg-red-500 hover:bg-red-700 rounded-md text-white'>Back</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmpEdit;