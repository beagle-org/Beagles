import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Fundraisers from './Fundraisers';
import MorganFundDonations from './MorganFundDonations';
import Sponsors from './Sponsors';
import BASHSponsors from './BASHSponsors';

const Donations = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div>Donations Page</div>} />

                <Route path="Fundraisers" element={<Fundraisers />} />
                <Route path="Sponsors" element={<Sponsors />} />
                <Route path="BASHSponsors" element={<BASHSponsors />} />
                <Route path="MorganFundDonations" element={<MorganFundDonations />} />
            </Routes>
        </div>
    );
};

export default Donations;
