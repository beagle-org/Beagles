import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavMenu.css';

export default class NavMenu extends Component {
    static displayName = 'NavMenu';

    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
            dropdownOpen: {},
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    toggleDropdown(name) {
        this.setState((prevState) => ({
            dropdownOpen: {
                ...prevState.dropdownOpen,
                [name]: !prevState.dropdownOpen[name],
            },
        }));
    }

    render() {
        return (
            <header>
                <img src="/BRSMHeader.png" alt="BRSMHeader" className="nav-banner" />
                <div className="navbar-container">
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                    <NavbarBrand tag={Link} to="/">Beagle Rescue of Southern Maryland, Inc.</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                            </NavItem>
                            <Dropdown nav isOpen={this.state.dropdownOpen.OurDogs} toggle={() => this.toggleDropdown('OurDogs')}>
                                <DropdownToggle nav caret>
                                    Our Dogs
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag={Link} to="/OurDogs">Meet Our Dogs</DropdownItem>
                                    <DropdownItem tag={Link} to="/OurDogs/DogsInNeed">Dogs in Need</DropdownItem>
                                    <DropdownItem tag={Link} to="/OurDogs/RecentlyAdopted">Recently Adopted Dogs</DropdownItem>
                                    <DropdownItem tag={Link} to="/OurDogs/AllAdopted">All Adopted Dogs</DropdownItem>
                                    <DropdownItem tag={Link} to="/OurDogs/BeforeandAfter">Before and After</DropdownItem>
                                    <DropdownItem tag={Link} to="/OurDogs/SuccessStories">Success Stories</DropdownItem>
                                    <DropdownItem tag={Link} to="/OurDogs/MorganFund">Morgan Fund Dogs</DropdownItem>
                                    <DropdownItem tag={Link} to="/OurDogs/Winston">Friends of Winston</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown nav isOpen={this.state.dropdownOpen.Adoption} toggle={() => this.toggleDropdown('Adoption')}>
                                <DropdownToggle nav caret>
                                    Adoption & Fostering
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag={Link} to="/Adoption">How To Adopt</DropdownItem>
                                    <DropdownItem tag={Link} to="/Adoption/StandardsforAdoption">Standards for Adoption</DropdownItem>
                                    <DropdownItem tag={Link} to="/Adoption/FosterProfile">Adopter / Foster Profile</DropdownItem>
                                    <DropdownItem tag={Link} to="/Adoption/AdoptionAgreement">Adoption Agreement</DropdownItem>
                                    <DropdownItem tag={Link} to="/Adoption/Fostering">Fostering</DropdownItem>
                                    <DropdownItem tag={Link} to="/Adoption/FosterVetRecordSheet">Foster Vet Record Sheet</DropdownItem>
                                    <DropdownItem tag={Link} to="/Adoption/LostAndFound">Lost & Found Dog Policy</DropdownItem>
                                    <DropdownItem tag={Link} to="/Adoption/EmergencyVets">Emergency Vets in our Area</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown nav isOpen={this.state.dropdownOpen.Donations} toggle={() => this.toggleDropdown('Donations')}>
                                <DropdownToggle nav caret>
                                    Donations & Funding
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag={Link} to="/Donations">Donations</DropdownItem>
                                    <DropdownItem tag={Link} to="/Donations/Fundraisers">Fundraisers</DropdownItem>
                                    <DropdownItem tag={Link} to="/Donations/MorganFundDonations">Morgan Fund</DropdownItem>
                                    <DropdownItem tag={Link} to="/Donations/Sponsors">Sponsors</DropdownItem>
                                    <DropdownItem tag={Link} to="/Donations/BASHSponsors">BASH Sponsors</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown nav isOpen={this.state.dropdownOpen.General} toggle={() => this.toggleDropdown('General')}>
                                <DropdownToggle nav caret>
                                    General Beagle Info
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag={Link} to="/General/NotetoParents">Note to Parents</DropdownItem>
                                    <DropdownItem tag={Link} to="/General/BasicDogCare">Basic Dog Care</DropdownItem>
                                    <DropdownItem tag={Link} to="/General/AsktheTrainer">Ask the Trainer</DropdownItem>
                                    <DropdownItem tag={Link} to="/General/Problems">Having Problems With Your Beagle?</DropdownItem>
                                    <DropdownItem tag={Link} to="/General/NoLongerKeep">Can No Longer Keep Your Beagle?</DropdownItem>
                                    <DropdownItem tag={Link} to="/General/EducationalBrochures">Educational Brochures</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown nav isOpen={this.state.dropdownOpen.BRSMInfo} toggle={() => this.toggleDropdown('BRSMInfo')}>
                                <DropdownToggle nav caret>
                                    BRSM Info
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag={Link} to="/BRSMInfo/About">About Us</DropdownItem>
                                    <DropdownItem tag={Link} to="/BRSMInfo/BRSMHistory">BRSM History</DropdownItem>
                                    <DropdownItem tag={Link} to="/BRSMInfo/ExemptionStatus">501c3 Status</DropdownItem>
                                    <DropdownItem tag={Link} to="/BRSMInfo/VolunteerPositions">Volunteer Positions</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/UpcomingEvents">Upcoming Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Shopping">Shopping</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                    </Navbar>
                </div>
            </header>
        );
    }
}
