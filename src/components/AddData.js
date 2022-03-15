import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddForm from './AddForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddData() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (data) => {
        console.log(data);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    return (
        <div className='tableTop'>
            <div className="tableTopLeft">
                <form className='searchForm'>
                    <input type="text" name="search" id="search" className='heading6' placeholder='Search for doctors &amp; Hospitals' />
                    <FontAwesomeIcon icon={faSearch} className='searchIcon' />
                </form>
            </div>

            <div className="tableTopRight">
                <button className='addBtn' onClick={handleOpen}>Add New</button>
            </div>
            <div style={{ display: 'none' }}>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <AddForm type='add' close={handleClose} />
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}
