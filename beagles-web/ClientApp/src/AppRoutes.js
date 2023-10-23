import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import OurDogs from './pages/OurDogs/OurDogs';
import DogsInNeed from './pages/OurDogs/DogsInNeed';
import RecentlyAdopted from './pages/OurDogs/RecentlyAdopted';
import AllAdopted from './pages/OurDogs/AllAdopted';
import BeforeandAfter from './pages/OurDogs/BeforeandAfter';
import SuccessStories from './pages/OurDogs/SuccessStories';
import MorganFund from './pages/OurDogs/MorganFund';
import Winston from './pages/OurDogs/Winston';
import UpcomingEvents from './pages/UpcomingEvents';
import Adoption from './pages/Adoption/Adoption';
import StandardsforAdoption from './pages/Adoption/StandardsforAdoption';
import FosterProfile from './pages/Adoption/FosterProfile';
import AdoptionAgreement from './pages/Adoption/AdoptionAgreement';
import Fostering from './pages/Adoption/Fostering';
import FosterVetRecordSheet from './pages/Adoption/FosterVetRecordSheet';
import LostAndFound from './pages/Adoption/LostAndFound';
import EmergencyVets from './pages/Adoption/EmergencyVets';
import Shopping from './pages/Shopping';
import Donations from './pages/Donations/Donations';
import MorganFundDonations from './pages/Donations/MorganFundDonations';
import Fundraisers from './pages/Donations/Fundraisers';
import Sponsors from './pages/Donations/Sponsors';
import BASHSponsors from './pages/Donations/BASHSponsors';
import General from './pages/General/General';
import AskTheTrainer from './pages/General/AsktheTrainer';
import NotetoParents from './pages/General/NotetoParents';
import BasicDogCare from './pages/General/BasicDogCare';
import Problems from './pages/General/Problems';
import NoLongerKeep from './pages/General/NoLongerKeep';
import EducationalBrochures from './pages/General/EducationalBrochures';
import About from './pages/BRSMInfo/About';
import BRSMHistory from './pages/BRSMInfo/BRSMHistory';
import VolunteerPositions from './pages/BRSMInfo/VolunteerPositions';
import ExemptionStatus from './pages/BRSMInfo/ExemptionStatus';
import NotFound from './pages/NotFound';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact />

            <Route path="/OurDogs/*" element={<OurDogs />}>
                <Route path="DogsInNeed" element={<DogsInNeed />} />
                <Route path="RecentlyAdopted" element={<RecentlyAdopted />} />
                <Route path="AllAdopted" element={<AllAdopted />} />
                <Route path="BeforeandAfter" element={<BeforeandAfter />} />
                <Route path="SuccessStories" element={<SuccessStories />} />
                <Route path="MorganFund" element={<MorganFund />} />
                <Route path="Winston" element={<Winston />} />
            </Route>

            <Route path="/UpcomingEvents" element={<UpcomingEvents />} />

            <Route path="/Adoption/" element={<Adoption />}>
                <Route path="" element={<Adoption />} />
                <Route path="StandardsforAdoption" element={<StandardsforAdoption />} />
                <Route path="FosterProfile" element={<FosterProfile />} />
                <Route path="AdoptionAgreement" element={<AdoptionAgreement />} />
                <Route path="Fostering" element={<Fostering />} />
                <Route path="FosterVetRecordSheet" element={<FosterVetRecordSheet />} />
                <Route path="LostAndFound" element={<LostAndFound />} />
                <Route path="EmergencyVets" element={<EmergencyVets />} />
            </Route>

            <Route path="/Shopping" element={<Shopping />} />

            <Route path="/Donations" element={<Donations />}>
                <Route path="" element={<Donations />} />
                <Route path="Fundraisers" element={<Fundraisers />} />
                <Route path="Sponsors" element={<Sponsors />} />
                <Route path="BASHSponsors" element={<BASHSponsors />} />
                <Route path="MorganFundDonations" element={<MorganFundDonations />} />
            </Route>

            <Route path="/General" element={<General />}>
                <Route path="" element={<General />} />
                <Route path="NotetoParents" element={<NotetoParents />} />
                <Route path="BasicDogCare" element={<BasicDogCare />} />
                <Route path="AskTheTrainer" element={<AskTheTrainer />} />
                <Route path="Problems" element={<Problems />} />
                <Route path="NoLongerKeep" element={<NoLongerKeep />} />
                <Route path="EducationalBrochures" element={<EducationalBrochures />} />
            </Route>

            <Route path="/BRSMInfo">
                <Route path="About" element={<About />} />
                <Route path="BRSMHistory" element={<BRSMHistory />} />
                <Route path="VolunteerPositions" element={<VolunteerPositions />} />
                <Route path="ExemptionStatus" element={<ExemptionStatus />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;