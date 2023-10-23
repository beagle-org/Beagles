import React from 'react';
import { Routes, Route } from 'react-router-dom';

import StandardsforAdoption from './StandardsforAdoption';
import AdopterFosterProfile from './FosterProfile';
import AdoptionAgreement from './AdoptionAgreement';
import Fostering from './Fostering';
import FosterVetRecordSheet from './FosterVetRecordSheet';
import LostAndFound from './LostAndFound';
import EmergencyVets from './EmergencyVets';

const Adoption = () => {
    return (
        <div className="container">
            <div>
            <Routes>
                <Route path="/" element={<div>How to Adopt Page</div>} />
                <Route path="StandardsforAdoption" element={<StandardsforAdoption />} />
                <Route path="FosterProfile" element={<AdopterFosterProfile />} />
                <Route path="AdoptionAgreement" element={<AdoptionAgreement />} />
                <Route path="Fostering" element={<Fostering />} />
                <Route path="FosterVetRecordSheet" element={<FosterVetRecordSheet />} />
                <Route path="LostAndFound" element={<LostAndFound />} />
                <Route path="EmergencyVets" element={<EmergencyVets />} />
            </Routes>
            </div>
        </div>
    );
};

export default Adoption;
