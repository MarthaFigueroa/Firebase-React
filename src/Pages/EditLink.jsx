import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../Components/NavBar.jsx'
import EditLinks from '../Components/EditLinks.jsx'

const EditLink = () => {
    
    return(
        <div>
            <NavBar />
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <EditLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default EditLink;