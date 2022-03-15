import logo from '../static/img/image 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import profile_photo from '../static/img/profile_photo.jpg'
import logo_short from '../static/img/logo header.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ClickAwayListener from 'react-click-away-listener'

export default function Topbar({ leftClosed, setLeftClosed }) {
    const [notification, setNotification] = useState(true)
    const [showProfileTop, setShowProfileTop] = useState(false)

    const clearNotification = () => {
        setNotification(false)
    }

    const profileTop = () => {
        setShowProfileTop(!showProfileTop)
    }


    return (
        <div className='topbar'>
            <div className="container">
                <div className={leftClosed ? ' topbarLeft leftClosed ' : ' topbarLeft left'}>
                    <Link to='/' style={{ textAlign: 'center' }}>
                        <img src={leftClosed ? logo_short : logo} alt="" className='logo' />
                    </Link>
                    <div className="chevronContainer" onClick={() => setLeftClosed(!leftClosed)}>
                        <i className={leftClosed ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'}></i>
                        <i className={leftClosed ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'}></i>
                    </div>
                </div>

                <div className='topbarRight right'>
                    <div className="topSearchbar">
                        <form className='searchForm'>
                            <input type="text" name="search" id="search" className='heading6' placeholder='Search for doctors &amp; Hospitals' />
                            <FontAwesomeIcon icon={faSearch} className='searchIcon' />
                        </form>
                    </div>
                    <div className="topRightAccount">
                        <div className='topBellContainer'>
                            <i className="fa-regular fa-bell topBell " onMouseEnter={clearNotification}></i>
                            <span className={notification ? 'active' : ''}></span>
                        </div>

                        <ClickAwayListener onClickAway={() => setShowProfileTop(false)}>
                            <div>

                                <img src={profile_photo} alt="" className='topProfilePhoto' onMouseDown={profileTop} />

                                <div className={showProfileTop ? 'profileInfoFloating active' : 'profileInfoFloating hide'}
                                    onMouseLeave={() => setShowProfileTop(false)}>
                                    <div className='profileInfoFloatingTop'>
                                        <p className="profileNameTop heading2">Fortis Hospital Jaipur</p>
                                        <p className="profileAboutTop heading2">Administrator</p>
                                    </div>
                                    <div className="profileLinkTop">
                                        <li className="linkTop heading3">My Profile</li>
                                        <li className="linkTop heading3">Log Out</li>
                                    </div>
                                </div>
                            </div>
                        </ClickAwayListener>
                    </div>
                </div>
            </div>

        </div >
    )
}
