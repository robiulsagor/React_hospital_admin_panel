
import EditIcon from '@mui/icons-material/Edit';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export const columns = {
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
                            <EditIcon className='iconEdit' />
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
                    {params.value === 'active' ? <p className="statusText approvedText" onClick={console.log('hiii')}>{params.value}</p> : ''}
                    {params.value === 'deactive' ? <p className="statusText rejectedText">{params.value}</p> : ''}
                </div>)
        },
        {
            field: 'action',
            headerName: 'Action', flex: .3,
            renderCell: (params) => {
                return (
                    <div className='tableActionContainer'>
                        <VisibilityOutlinedIcon className='iconView' onClick={console.log('clicked')} />
                        <EditIcon className='iconEdit' onClick={() => alert(params.id)} />
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
};



export const rows = {
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
};
