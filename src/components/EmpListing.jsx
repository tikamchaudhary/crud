import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EmpListing() {
    const [empData, setEmpData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/employees")
            .then((res) => res.json())
            .then((res) => setEmpData(res))
            .catch((err) => console.log(err.message))
    }, [])


    const handelDelete = (id) => {
        if (window.confirm('Do you want to delete?')) {
            fetch(`http://localhost:8080/employees/${id}`, {
                method: "DELETE"
            }).then(() => {
                window.location.reload();
            }).catch((err) => console.log(err.message))
        }
    }

    return (
        <div className='w-full p-8'>
            <div className='border border-slate-500 rounded-lg shadow p-5 '>
                <div className='flex gap-5 flex-col md:flex-row justify-between'>
                    <div className='text-center font-bold text-xl text-slate-500'>
                        Employees Listing
                    </div>
                    <div className='font-semibold text-lg px-4 py-2 bg-slate-700 rounded-lg text-white text-center hover:bg-slate-950 w-6/12 md:w-auto mx-auto md:mr-0'>
                        <Link to="/employee/create">Add New (+)</Link>
                    </div>
                </div>
                <div className='mt-5'>
                    <table className="w-full border-collapse border border-slate-400">
                        <thead className='bg-slate-700 text-white'>
                            <tr>
                                <th className="py-1.5 border border-slate-300">Id</th>
                                <th className="py-1.5 border border-slate-300">Name</th>
                                <th className="py-1.5 border border-slate-300">Email</th>
                                <th className="py-1.5 border border-slate-300">Phone</th>
                                <th className="py-1.5 border border-slate-300">Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-slate-500'>
                            {
                                empData && empData.map((item) => (
                                    <tr key={item.id}>
                                        <td className="py-1.5 border border-slate-300" >{item.id}</td>
                                        <td className="py-1.5 border border-slate-300" >{item.name}</td>
                                        <td className="py-1.5 border border-slate-300" >{item.email}</td>
                                        <td className="py-1.5 border border-slate-300" >{item.phone}</td>
                                        <td className="py-1.5 border border-slate-300" >
                                            <Link to={`/employee/detail/${item.id}`}
                                                className='px-4 py-1 bg-green-500 hover:bg-green-700 text-white rounded-md'
                                            >Detail</Link>
                                            <Link to={`/employee/edit/${item.id}`}
                                                className='px-4 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded-md mx-2'
                                            >Edit</Link>
                                            <Link to="#"
                                                className='px-4 py-1 bg-red-500 hover:bg-red-700 text-white rounded-md'
                                                onClick={() => handelDelete(item.id)}
                                            >Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpListing;