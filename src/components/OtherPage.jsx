import React from 'react'
import Breadcrumb from './Breadcrumb'
import DataTable from './DataTable'

export default function OtherPage() {
    return (
        <div className='mainRight right'>
            <Breadcrumb />
            <p className="pageTitle">Departments</p>
            <div className="tableContainer">
                <DataTable />
            </div>
        </div>
    )
}
