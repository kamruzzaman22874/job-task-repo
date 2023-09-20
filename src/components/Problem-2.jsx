import React from 'react';
import Modal from './Modal';
import ShowModal from './Modal';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ShowModal2 from './Modal2';


const Problem2 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);
    

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button onClick={handleShow} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    <button onClick={handleShow2} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

            </div>
            <ShowModal show={show} setShow={setShow} setInnerShow={setShow2} />
            <ShowModal2 show={show2} setShow={setShow2} setInnerShow={setShow} />
        </div>
    );
};

export default Problem2;