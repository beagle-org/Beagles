import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotetoParents from './NotetoParents';
import BasicDogCare from './BasicDogCare';
import AsktheTrainer from './AsktheTrainer';
import Problems from './Problems';
import NoLongerKeep from './NoLongerKeep';
import EducationalBrochures from './EducationalBrochures';

const General = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div>General Info Page</div>} />

                <Route path="NotetoParents" element={<NotetoParents />} />
                <Route path="BasicDogCare" element={<BasicDogCare />} />
                <Route path="AsktheTrainer" element={<AsktheTrainer />} />
                <Route path="Problems" element={<Problems />} />
                <Route path="NoLongerKeep" element={<NoLongerKeep />} />
                <Route path="EducationalBrochures" element={<EducationalBrochures />} />
            </Routes>
        </div>
    );
};

export default General;
