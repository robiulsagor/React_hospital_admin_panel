import errImg from '../static/img/404.png'

export default function NotFound() {
    return (
        <div className='mainRight right' style={{ background: '#f7f7f7' }}>
            <p className="pageTitle">Page Not Found</p>
            <div className="errContainer">
                <img src={errImg} alt="" />
                <h2 className='headingHuge2'>Sorry</h2>
                <h1 className='headingHuge'>The Page You Are Looking For Is Not Available</h1>
            </div>

        </div>
    )
}
