import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import DataTable from '../components/DataTable'

export default function Departments() {
    return (
        <div className='mainRight right'>
            <Breadcrumb />
            <p className="pageTitle">Departments</p>
            <div className="tableContainer">
                <DataTable data='departments' />
            </div>
        </div>
    )
}
