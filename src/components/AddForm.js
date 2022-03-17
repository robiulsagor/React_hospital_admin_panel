import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Form({ type, editID, close }) {
    const history = useLocation()
    const page = history.pathname.split('/')[1]

    console.log(type, page, editID);
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className='editForm'>
            <div className='flexBetween'>
                {type === 'edit' ? (
                    page === 'doctors' ? <h2>Edit Doctor</h2> : <h2>Edit Department</h2>
                ) :
                    (
                        page === 'doctors' ? <h2>Add a Doctor</h2> : <h2>Add a Department</h2>
                    )}
                <button className='modalCloseBtn' onClick={close}>&times;</button>
            </div>
            <form>
                <input type="text" id='name' className='formControl' placeholder='First Name' />
                <input type="text" id='name' className='formControl' placeholder='Last Name' />
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" id='name' className='formControl' placeholder='Specialty' />
                    <select name="gender" id="gender" className='formControl' defaultValue=''>
                        <option value="" disabled >Gender</option>
                        <option value="Male" >Male</option>
                        <option value="Female" >Female</option>
                    </select>
                </div>
                <textarea name="address" id="address" cols="20" rows="5" className='formControl' placeholder='Address'></textarea>

                <div className="flexBetween" style={{ marginTop: '8px' }}>
                    <button type='button' className="btn cancelBtn" onClick={close}>Cancel</button>
                    <button type='submit' className='btn addBtn' onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}
