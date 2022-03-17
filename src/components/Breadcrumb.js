import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, useLocation } from 'react-router-dom';

function handleClick(event) {
    event.preventDefault();
    window.history.pushState('', 'Dashboard', '/');
}

export default function Breadcrumb() {

    const location = useLocation()
    let path = location.pathname.split('/')
    path = path[1]
    path = path.charAt(0).toUpperCase() + path.slice(1);
    const breadcrumbs = [
        <Link to='/' style={{ textDecoration: 'none' }}>
            <p className='breadcrumb'>Home</p>
        </Link>,
        <p key="2" className='breadcrumb'>
            {path}
        </p>,
    ];

    return (


        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb" style={{ marginTop: '20px' }}
        >
            {breadcrumbs}
        </Breadcrumbs>

    );
}