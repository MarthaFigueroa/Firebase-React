import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../Components/NavBar.jsx'
import ListLinks from '../Components/ListLinks.jsx';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListLink = () => {
    
    return(
        <div>
            <NavBar />
            <div className="container p-4">
                <div className="row">
                    <ToastContainer />
                    <ListLinks />
                </div>
            </div>
        </div>
        )
}

export default ListLink;