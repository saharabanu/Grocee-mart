import React from 'react'
import DashboardPart3 from './DashboardPart3'

const DashboardPart1 = () => {
  return (
    <>
	 <div>
          <h3>Dashboard</h3>

		  <div className="row ">
			<div className="col-md-4 mb-2">
				<div className="d-flex  bg-white py-2 px-2">
				   <div className='pe-4'>
				      <span className="material-icons-sharp nav-icon">
					   analytics</span>
				    </div>
				    <div>
				      <p>Total Sales</p>
				      <h6>50,152 </h6>
				    </div>
				</div>

			</div>
			<div className="col-md-4 mb-2">
			<div className="d-flex  bg-white py-2 px-2">
				   <div className='pe-4'>
				   <i className="fa-solid fa-cart-shopping nav-icon"></i>
				    </div>
				    <div>
				      <p>Total Orders</p>
				      <h6>50,152 </h6>
				    </div>
				</div>
			</div>
			<div className="col-md-4 mb-2">
			<div className="d-flex  bg-white py-2 px-2">
				   <div className='pe-4'>
				   <span className="material-icons-sharp nav-icon">
					stacked_line_chart</span>
				    </div>
				    <div>
				      <p>Total Products</p>
				      <h6>152 </h6>
				    </div>
				</div>
			</div>
		  </div>
	 </div>
       {/* <div className="row">
        <div className="col-md-8">
        <div className="row insights">
        <div className="sales col-md-4">
				<span className="material-icons-sharp">
					analytics</span>
				<div className="middle">
					<div className="left">
						<h3>Total Sales</h3>
						<h1>50,152 </h1>
					</div>
					<div className="progress">
						<svg>
							<circle cx="38" cy="38" r="36"></circle>
						</svg>
						<div className="number">
							<p>81%</p>
						</div>
					</div>
				</div>
				<small className="text-muted">Last 24 Hours</small>
			</div>
			
			<div className="expenses col-md-4">
				<span className="material-icons-sharp">
					bar_chart</span>
				<div className="middle">
					<div className="left">
						<h3>Total Expenses</h3>
						<h1>30,152 </h1>
					</div>
					<div className="progress">
						<svg>
							<circle cx="38" cy="38" r="36"></circle>
						</svg>
						<div className="number">
							<p>64%</p>
						</div>
					</div>
				</div>
				<small className="text-muted">Last 24 Hours</small>
			</div>
			
			<div className="income col-md-4">
				<span className="material-icons-sharp">
					stacked_line_chart</span>
				<div className="middle">
					<div className="left">
						<h3>Total Income</h3>
						<h1>20,000 </h1>
					</div>
					<div className="progress">
						<svg>
							<circle cx="38" cy="38" r="36"></circle>
						</svg>
						<div className="number">
							<p>39%</p>
						</div>
					</div>
				</div>
				<small className="text-muted">Last 24 Hours</small>
			</div>
			
		</div>
        </div>
        <div className="col-md-4">
            <DashboardPart3/>
        </div>
       </div> */}
    </>
  )
}

export default DashboardPart1