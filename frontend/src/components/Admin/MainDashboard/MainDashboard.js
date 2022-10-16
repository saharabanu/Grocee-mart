import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import CreateProduct from '../CreateProduct/CreateProduct';
import './Dashboard.css'
import Navigation from '../../Shared/Navigation/Navigation';
import DashboardPart1 from './DashboardPart1';
import DashboardPart2 from './DashboardPart2';
import DashboardPart3 from './DashboardPart3';

const MainDashboard = () => {
  let { adminPage } = useParams();
  const [isActive, setActive] = useState(true);
    const toggleClass = () => {
        setActive(!isActive);
    };

    return (<>
        <div className="admin_top_bar">
        {/* <Navigation/> */}
            <marquee>E-com DEV - Admin Panel</marquee>
        </div>
        <div className='admin_dashboard '>
            {/* sidebar nav start */}
            
            <div className={isActive ? "sidebar active" : "sidebar"} >
                <div className="logo_content ">
                    <div className="logo ">
                        <Link to="/home" className="logo_name">Grocee</Link>
                    </div>
                    <i className='fa-solid fa-bars ' id="btn" onClick={toggleClass}></i>
                </div>
                
                <ul className="nav_list">
                    <li>
                        <Link to="/admin/dashboard">
                        <i className="material-icons-sharp"> dashboard</i>
                            <span className="links_name">Dashboard</span>
                        </Link>
                        <span className="tooltip">Dashboard</span>
                    </li>

                    
                    <li>
                        <Nav.Link as={Link} to="/admin/create-product">
                        <i className="material-icons-sharp">
						add</i>
                            <span className="links_name">Add A Product</span>
                        </Nav.Link>
                        <span className="tooltip">Add A Product</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to="/admin/dashboard">
                        <i className="material-icons-sharp">
						add</i>
                            <span className="links_name">Manage Products</span>
                        </Nav.Link>
                        <span className="tooltip">Manage Products</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to="/admin/dashboard">
                        <i className="material-icons-sharp">
						add</i>
                            <span className="links_name">Make Admin</span>
                        </Nav.Link>
                        <span className="tooltip">Make Admin</span>
                    </li>

                    {/* </> : <div className='d-flex justify-content-center'><Spinner className='mx-auto my-5' animation="grow" /></div> */}


                    <li>
                        <Nav.Link >
                        <i className="material-icons-sharp">
						logout</i>
                            <span className="links_name">Logout</span>
                        </Nav.Link>
                        <span className="tooltip">Logout</span>
                    </li>

                </ul>
                
            </div>
            {/* sidebar nav end */}
            <div className="home_content">
           

                {
                    adminPage === "create-product" ? <CreateProduct /> : <>
                   
                        <DashboardPart1/>
                        <DashboardPart2/>
                        <DashboardPart3/>
                        
                        </>

                }


            </div>
        </div>

    </>
    )
}

export default MainDashboard