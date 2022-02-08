import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddLink from '../Pages/AddLink';
import EditLink from '../Pages/EditLink';
import ListLink from '../Pages/ListLink';

function App() {
  return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ListLink />} />

                {/* Prestamso */}
                {/* <Route exact path="/prestamos" component={prestamos} /> */}
                <Route exact path="/newLink" element={<AddLink />} />
                <Route exact path="/editLink/:id" element={<EditLink />} />
            </Routes>
        </Router>
    )   
}

export default App;

