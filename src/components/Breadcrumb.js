import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation } from 'react-router-dom';

function handleClick(event) {
    event.preventDefault();
}

export default function Breadcrumb() {

    const location = useLocation()
    let path = location.pathname.split('/')
    path = path[1]
    path = path.charAt(0).toUpperCase() + path.slice(1);
    const breadcrumbs = [
        <Link underline="none" key="1" href="/" onClick={handleClick} className='breadcrumb'>
            Home
        </Link>,
        <Link
            underline="none"
            key="2"
            href="/getting-started/installation/"
            onClick={handleClick}
            className='breadcrumb'
        >
            Hospitals
        </Link>,
        <p key="3" className='breadcrumb'>
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