import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import DataTable from '../components/DataTable'

export default function Appoinments() {
    return (
        <div className='mainRight right'>
            <Breadcrumb />
            <p className="pageTitle">Appointments List</p>
            <div className="tableContainer">
                <DataTable data='appointments' />
            </div>
        </div>
    )
}
