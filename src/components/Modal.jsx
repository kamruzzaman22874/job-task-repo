import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ShowModal({ show, setShow }) {
    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal A</Modal.Title>
                </Modal.Header>
                
                <Modal.Footer>
                    <Button variant="secondary" >
                        All Contact
                    </Button>
                    <Button variant="primary">
                        Us Contact
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ShowModal;