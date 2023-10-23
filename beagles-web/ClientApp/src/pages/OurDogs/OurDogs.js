import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DogsInNeed from './DogsInNeed';
import RecentlyAdopted from './RecentlyAdopted';
import AllAdopted from './AllAdopted';
import BeforeandAfter from './BeforeandAfter';
import SuccessStories from './SuccessStories';
import MorganFund from './MorganFund';
import Winston from './Winston';


const OurDogs = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div>Meet Our Dogs</div>} />

                <Route path="DogsInNeed" element={<DogsInNeed />} />
                <Route path="RecentlyAdopted" element={<RecentlyAdopted />} />
                <Route path="AllAdopted" element={<AllAdopted />} />
                <Route path="BeforeandAfter" element={<BeforeandAfter />} />
                <Route path="SuccessStories" element={<SuccessStories />} />
                <Route path="MorganFund" element={<MorganFund />} />
                <Route path="Winston" element={<Winston />} />
            </Routes>
        </div>
    );
};

export default OurDogs;
