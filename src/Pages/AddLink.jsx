import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../Components/NavBar.jsx'
import AddLinks from '../Components/AddLinks.jsx'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddLink = () => {
    
    return(
        <div>
            <NavBar />
            <div className="container p-4">
                <div className="row">
                    <ToastContainer />
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">Add New Contact</div>
                            <div className="card-body">
                                <AddLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default AddLink;