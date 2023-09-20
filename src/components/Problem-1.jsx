import React, { useState } from 'react';

const Problem1 = () => {
    const [inputValue, setInputValue] = useState([])
    const [show, setShow] = useState('all');
    const handleClick = (val) => {
        setShow(val);
    }

    const handleForm = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const status = form.status.value;
        const inputStatus = { name: name, status: status }
        setInputValue([...inputValue, inputStatus])

    }


    const handleStatusField = inputValue.filter(item => {
        if (show === "all") {
            return true;
        }
        else {
            return item.status.toLowerCase() === show;
        }
    })
        .sort((a, b) => {
            if (a.status.toLowerCase() === "active" && b.status.toLowerCase() === "completed") {
                return -1;
            } else if (a.status.toLowerCase() === "completed" && b.status.toLowerCase() === "active") {
                return 1; 
            } else {
                return 0; 
            }
        });

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleForm} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                handleStatusField.map((value, i) => <tr key={i}>
                                    <th>{value.name}</th>
                                    <th>{value.status}</th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;