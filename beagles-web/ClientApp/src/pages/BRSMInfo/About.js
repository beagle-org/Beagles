import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BRSMHistory from './BRSMHistory';
import ExemptionStatus from './ExemptionStatus';
import VolunteerPositions from './VolunteerPositions';

const BRSMInfo = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div>About Page</div>} />
                <Route path="BRSMHistory" element={<BRSMHistory />} />
                <Route path="ExemptionStatus" element={<ExemptionStatus />} />
                <Route path="VolunteerPositions" element={<VolunteerPositions />} />
            </Routes>
        </div>
    );
};

export default BRSMInfo;
