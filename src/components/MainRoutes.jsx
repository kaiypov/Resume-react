import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe'
import Works from './Works/Works'
import Contacts from './Contacts/Contacts'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
            <Route path="/aboutme" element={<AboutMe/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/contacts" element={<Contacts/>} />

            </Routes>
        </div>
    );
};

export default MainRoutes;