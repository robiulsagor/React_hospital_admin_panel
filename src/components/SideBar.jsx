import profile_photo from '../static/img/profile_photo.jpg'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function SideBar({ leftClosed, setLeftClosed }) {
    const history = useLocation()
    const nav = history.pathname.split('/')[1]

    return (
        <div className={leftClosed ? ' sidebar leftClosed ' : ' sidebar left'}>
            <div className="profileContainerLeft">
                <img src={profile_photo} alt="" className='profilePhotoLeft' />
                <p className='heading1 profileNameLeft'>John Doe</p>
                <p className="heading2 profileEmailLeft">johndoe@withinpixels.com</p>
            </div>

            <ul className="adminLinksLeft">

                <Link to='/' className='li'><li className={nav === '' ? 'active' : ''}><i className="fa-solid fa-border-all iconLeft"></i><span className='linkText'> Dashboard</span></li></Link>

                <Link to='/doctors' className='li'>
                    <li className={nav === 'doctors' ? 'active' : ''}><i className="fa-solid fa-stethoscope iconLeft"></i> <span className='linkText'> Doctors</span></li></Link>

                <Link to='/departments' className='li'>
                    <li className={nav === 'departments' ? 'active' : ''}><i className="fa-solid fa-user-doctor iconLeft"></i> <span className='linkText'> Departments</span></li></Link>

                <Link to='/appointments' className='li'>
                    <li className={nav === 'appointments' ? 'active' : ''}><i className="fa-solid fa-calendar-days iconLeft"></i><span className='linkText'> Appoinments</span></li>
                </Link>

                <Link to='/patients' className='li'>
                    <li className={nav === 'patients' ? 'active' : ''}><i className="fa-solid fa-user iconLeft"></i><span className='linkText'> Patients</span></li>
                </Link>

                <Link to='/transactions' className='li'>
                    <li className={nav === 'transactions' ? 'active' : ''}><i className="fa-regular fa-credit-card iconLeft"></i><span className='linkText'> Transactions</span></li>
                </Link>

                <Link to='/reports' className='li'>
                    <li className={nav === 'reports' ? 'active' : ''}><i className="fa-regular fa-file iconLeft"></i> <span className='linkText'> Reports</span></li>
                </Link>

                <Link to='/settings' className='li'>
                    <li className={nav === 'settings' ? 'active' : ''}><i className="fa-solid fa-gear iconLeft"></i> <span className='linkText'> Settings</span></li>
                </Link>
            </ul>

        </div>
    )
}
