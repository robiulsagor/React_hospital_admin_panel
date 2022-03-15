import React from 'react'

export default function Form({ close, type }) {
    console.log(type);
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className='editForm'>
            <div className='flexBetween'>
                <h2>Add a Doctor</h2>
                <button className='modalCloseBtn' onClick={close}>&times;</button>
            </div>
            <form>
                <input type="text" id='name' className='formControl' placeholder='First Name' />
                <input type="text" id='name' className='formControl' placeholder='Last Name' />
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" id='name' className='formControl' placeholder='Specialty' />
                    <select name=" " id="gender" className='formControl'>
                        <option value="" disabled selected>Gender</option>
                        <option value="Male" >Male</option>
                        <option value="Female" >Female</option>
                    </select>
                </div>
                <textarea name="" id="address" cols="20" rows="5" className='formControl' placeholder='Address'></textarea>

                <div className="flexBetween" style={{ marginTop: '8px' }}>
                    <button type='button' className="btn cancelBtn" onClick={close}>Cancel</button>
                    <button type='submit' className='btn addForm' onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}
