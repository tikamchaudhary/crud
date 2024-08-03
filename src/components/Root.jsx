import React from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
    <h1 className='font-extrabold text-4xl text-center text-slate-700 my-5'>React JS CRUD Opertations</h1>
    <Outlet/>
    </>
  )
}

export default Root;