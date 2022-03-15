import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';
import AddData from './AddData';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import EditIcon from '@mui/icons-material/Edit';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddForm from './AddForm';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function DataTable({ data }) {
    const history = useLocation()
    const nav = history.pathname.split('/')[1]

    // modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = (data) => {
        setOpen(true)
        return data;
    };
    const handleClose = () => setOpen(false);

    // data

    const columns = {
        doctors:
            [
                { field: 'id', headerName: 'ID', flex: .2 },
                { field: 'name', headerName: 'Name', editable: true, flex: .8 },
                {
                    field: 'address', headerName: 'Address', flex: 1,
                    renderCell: (params) => (
                        <div>
                            <p>{params.value.addressLineOne}</p>
                            <p color="textSecondary">{params.value.addressLineTwo}</p>
                        </div>)
                },
                {
                    field: 'dailyAppoints',
                    headerName: 'Number of Daily Appoinments',
                    type: 'number',
                    flex: 1,
                    align: 'center'
                },
                {
                    field: 'memberSince',
                    headerName: 'Member Since',
                    flex: .7,
                    type: 'date',
                },
                {
                    field: 'status',
                    headerName: 'Account Status',
                    flex: .6,
                    renderCell: (params) => (
                        <div className='statusContainer'>
                            {params.value === 'approved' ? <p className="statusText approvedText">{params.value}</p> : ''}
                            {params.value === 'pending' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'in progress' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'rejected' ? <p className="statusText rejectedText">{params.value}</p> : ''}
                        </div>)
                },
                {
                    field: 'action',
                    headerName: 'Action', flex: .3,
                    renderCell: (params) => {
                        return (
                            <div className='tableActionContainer'>
                                <VisibilityOutlinedIcon className='iconView' />
                                <EditIcon className='iconEdit' onClick={() => handleOpen(params)} />
                            </div>
                        )
                    }
                },

            ],
        appointments:
            [
                { field: 'id', headerName: 'ID', flex: .2 },
                { field: 'name', headerName: 'Name', editable: true, flex: .8 },
                {
                    field: 'address', headerName: 'Address', flex: 1,
                    renderCell: (params) => (
                        <div>
                            <p>{params.value.addressLineOne}</p>
                            <p color="textSecondary">{params.value.addressLineTwo}</p>
                        </div>)
                },
                {
                    field: 'dailyAppoints',
                    headerName: 'Number of Daily Appoinments',
                    type: 'number',
                    flex: 1,
                    align: 'center'
                },
                {
                    field: 'memberSince',
                    headerName: 'Member Since',
                    flex: .7,
                    type: 'date',
                },
                {
                    field: 'status',
                    headerName: 'Account Status',
                    flex: .6,
                    renderCell: (params) => (
                        <div className='statusContainer'>
                            {params.value === 'approved' ? <p className="statusText approvedText">{params.value}</p> : ''}
                            {params.value === 'pending' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'in progress' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'rejected' ? <p className="statusText rejectedText">{params.value}</p> : ''}
                        </div>)
                },


            ],
        departments: [
            { field: 'id', headerName: 'ID', flex: .3 },
            { field: 'departmentName', headerName: 'Department Name', editable: true, flex: 1 },
            { field: 'doctors', headerName: 'Doctors', flex: .2, type: 'string' },
            {
                field: 'status', headerName: 'Status', flex: .2,
                renderCell: (params) => (
                    <div className='statusContainer'>
                        {params.value === 'active' ? <p className="statusText approvedText" >{params.value}</p> : ''}
                        {params.value === 'deactive' ? <p className="statusText rejectedText">{params.value}</p> : ''}
                    </div>)
            },
            {
                field: 'action',
                headerName: 'Action', flex: .3,
                renderCell: (params) => {
                    return (
                        <div className='tableActionContainer'>
                            <VisibilityOutlinedIcon className='iconView' />
                            <EditIcon className='iconEdit' onClick={handleOpen} />
                        </div>
                    )
                }
            },
        ],
        patients:
            [
                { field: 'id', headerName: 'ID', flex: .2 },
                { field: 'name', headerName: 'Name', editable: true, flex: .8 },
                {
                    field: 'address', headerName: 'Address', flex: 1,
                    renderCell: (params) => (
                        <div>
                            <p>{params.value.addressLineOne}</p>
                            <p color="textSecondary">{params.value.addressLineTwo}</p>
                        </div>)
                },
                {
                    field: 'dailyAppoints',
                    headerName: 'Number of Daily Appoinments',
                    type: 'number',
                    flex: 1,
                    align: 'center'
                },
                {
                    field: 'memberSince',
                    headerName: 'Member Since',
                    flex: .7,
                    type: 'date',
                },
                {
                    field: 'status',
                    headerName: 'Account Status',
                    flex: .6,
                    renderCell: (params) => (
                        <div className='statusContainer'>
                            {params.value === 'approved' ? <p className="statusText approvedText">{params.value}</p> : ''}
                            {params.value === 'pending' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'in progress' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'rejected' ? <p className="statusText rejectedText">{params.value}</p> : ''}
                        </div>)
                },


            ],
        transactions:
            [
                { field: 'id', headerName: 'ID', flex: .2 },
                { field: 'name', headerName: 'Name', editable: true, flex: .8 },
                {
                    field: 'address', headerName: 'Address', flex: 1,
                    renderCell: (params) => (
                        <div>
                            <p>{params.value.addressLineOne}</p>
                            <p color="textSecondary">{params.value.addressLineTwo}</p>
                        </div>)
                },
                {
                    field: 'dailyAppoints',
                    headerName: 'Number of Daily Appoinments',
                    type: 'number',
                    flex: 1,
                    align: 'center'
                },
                {
                    field: 'memberSince',
                    headerName: 'Member Since',
                    flex: .7,
                    type: 'date',
                },
                {
                    field: 'status',
                    headerName: 'Account Status',
                    flex: .6,
                    renderCell: (params) => (
                        <div className='statusContainer'>
                            {params.value === 'approved' ? <p className="statusText approvedText">{params.value}</p> : ''}
                            {params.value === 'pending' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'in progress' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'rejected' ? <p className="statusText rejectedText">{params.value}</p> : ''}
                        </div>)
                },


            ],
        reports:
            [
                { field: 'id', headerName: 'ID', flex: .2 },
                { field: 'name', headerName: 'Name', editable: true, flex: .8 },
                {
                    field: 'address', headerName: 'Address', flex: 1,
                    renderCell: (params) => (
                        <div>
                            <p>{params.value.addressLineOne}</p>
                            <p color="textSecondary">{params.value.addressLineTwo}</p>
                        </div>)
                },
                {
                    field: 'dailyAppoints',
                    headerName: 'Number of Daily Appoinments',
                    type: 'number',
                    flex: 1,
                    align: 'center'
                },
                {
                    field: 'memberSince',
                    headerName: 'Member Since',
                    flex: .7,
                    type: 'date',
                },
                {
                    field: 'status',
                    headerName: 'Account Status',
                    flex: .6,
                    renderCell: (params) => (
                        <div className='statusContainer'>
                            {params.value === 'approved' ? <p className="statusText approvedText">{params.value}</p> : ''}
                            {params.value === 'pending' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'in progress' ? <p className="statusText pendingText">{params.value}</p> : ''}
                            {params.value === 'rejected' ? <p className="statusText rejectedText">{params.value}</p> : ''}
                        </div>)
                },


            ],
        lastAppointments:
            [{ field: 'id', headerName: 'ID', flex: .2 },
            { field: 'name', headerName: 'Name', flex: .8 },
            {
                field: 'email', headerName: 'Email', flex: 1,
            },
            {
                field: 'date',
                headerName: 'Date',
                flex: .6,
                align: 'center'
            },
            {
                field: 'visitTime',
                headerName: 'Visit Time',
                flex: .7,
            },
            {
                field: 'number',
                headerName: 'Number',
                flex: .7,
            },
            {
                field: 'doctor',
                headerName: 'Doctor',
                flex: .7,
            },
            {
                field: 'injury',
                headerName: 'Injury/Condition',
                flex: .7,
            },
            ],
    };

    const rows = {
        doctors:
            [
                {
                    id: 1, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 2, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 3, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'in progress'
                },
                {
                    id: 4, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'pending'
                },
                {
                    id: 5, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'in progress'
                },
                {
                    id: 6, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'pending'
                },
                {
                    id: 7, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'approved'
                },
                {
                    id: 8, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'approved'
                },
            ],
        appointments:
            [
                {
                    id: 1, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 2, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'in progress'
                },
                {
                    id: 3, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 4, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'approved'
                },
                {
                    id: 5, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'pending'
                },
                {
                    id: 6, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
            ],
        departments: [
            { id: 1, departmentName: 'Cardiology', doctors: 5, status: 'active' },
            { id: 2, departmentName: 'Dentistry', doctors: 5, status: 'deactive' },
            { id: 3, departmentName: 'Laboratory', doctors: 5, status: 'deactive' },
            { id: 4, departmentName: 'Gastrology', doctors: 5, status: 'active' },
        ],
        patients:
            [
                {
                    id: 1, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 2, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'in progress'
                },
                {
                    id: 3, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 4, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'approved'
                },
                {
                    id: 5, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'pending'
                },
                {
                    id: 6, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
            ],
        transactions:
            [
                {
                    id: 1, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 2, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'in progress'
                },
                {
                    id: 3, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 4, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'approved'
                },
                {
                    id: 5, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'pending'
                },
                {
                    id: 6, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
            ],
        reports:
            [
                {
                    id: 1, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 2, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'in progress'
                },
                {
                    id: 3, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
                {
                    id: 4, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'approved'
                },
                {
                    id: 5, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'pending'
                },
                {
                    id: 6, name: 'Daniel', address: { addressLineOne: '71 Pilgrim Avenue', addressLineTwo: 'Chevy Chase MD 20815' }, dailyAppoints: '404-447-6013', memberSince: '404-447 - 6013', status: 'rejected'
                },
            ],
        lastAppointments: [
            {
                id: 1, name: 'Liam', email: 'liam@gmail.com', date: '18 Dec 2020', visitTime: '10:15 - 10:30', number: '0123456789', doctor: 'Dr. Sopie', injury: 'allergy'
            }, {
                id: 2, name: 'Liam', email: 'liam@gmail.com', date: '18 Dec 2020', visitTime: '10:15 - 10:30', number: '0123456789', doctor: 'Dr. Sopie', injury: 'arthritis'
            }, {
                id: 3, name: 'Liam', email: 'liam@gmail.com', date: '18 Dec 2020', visitTime: '10:15 - 10:30', number: '0123456789', doctor: 'Dr. Sopie', injury: 'depression'
            }, {
                id: 4, name: 'Liam', email: 'liam@gmail.com', date: '18 Dec 2020', visitTime: '10:15 - 10:30', number: '0123456789', doctor: 'Dr. Sopie', injury: 'diarrhoea'
            }, {
                id: 5, name: 'Liam', email: 'liam@gmail.com', date: '18 Dec 2020', visitTime: '10:15 - 10:30', number: '0123456789', doctor: 'Dr. Sopie', injury: 'allergy'
            }
        ]
    };

    return (
        <div className='tableContainer'>

            {((nav === 'doctors') || (nav === 'departments')) && <AddData open={handleOpen} close={handleClose} />}

            <div style={{ height: 400, width: '100%' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <DataGrid
                            rows={(nav === '' && rows.lastAppointments) || (nav === 'departments' && rows.departments) || (nav === 'doctors' && rows.doctors) || (nav === 'appointments' && rows.appointments) || (nav === 'patients' && rows.patients) || (nav === 'transactions' && rows.transactions) || (nav === 'reports' && rows.reports)}
                            columns={(nav === '' && columns.lastAppointments) || (nav === 'departments' && columns.departments) || (nav === 'doctors' && columns.doctors) || (nav === 'appointments' && columns.appointments) || (nav === 'patients' && columns.patients) || (nav === 'transactions' && columns.transactions) || (nav === 'reports' && columns.reports)}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            sx={{
                                width: '100%',
                                fontFamily: 'GM',
                                border: 0,
                                borderRadius: '0 0 10px 10px',
                                background: '#fff',
                                fontSize: 11,
                                '& .MuiDataGrid-cell:hover': {
                                    color: 'primary.main',
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ overflow: 'scroll', width: '100%' }}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 0 }}>
                        <AddForm type='edit' close={handleClose} />
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}