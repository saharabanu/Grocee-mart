import React from 'react'

const DashboardPart3 = () => {
  return (
    <>
	 <div className="recent-orders ">
			<h3 className='pb-3'>Recent Orders</h3>
			<table>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Product Number</th>
						<th>Payment</th>
						<th>Status</th>
						<th>Date</th>
						
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Foldable Mini Drone</td>
						<td>85631</td>
						<td>Dye</td>
						<td className="danger">Pending</td>
						<td className="warning">Details</td>
					</tr>
					<tr>
						<td>Foldable Mini Drone</td>
						<td>85631</td>
						<td>Dye</td>
						<td className="text-danger">Pending</td>
						<td className="text-danger">Details</td>
					</tr>
					<tr>
						<td>Foldable Mini Drone</td>
						<td>85631</td>
						<td>Dye</td>
						<td className="text-danger">Pending</td>
						<td className="text-danger">Details</td>
					</tr>
					<tr>
						<td>Foldable Mini Drone</td>
						<td>85631</td>
						<td>Dye</td>
						<td className="text-danger">Pending</td>
						<td className="text-danger">Details</td>
					</tr>
					<tr>
						<td>Foldable Mini Drone</td>
						<td>85631</td>
						<td>Dye</td>
						<td className="warning">Pending</td>
						<td className="primary">Details</td>
					</tr>
					{/* <tr>
						<td>Foldable Mini Drone</td>
						<td>85631</td>
						<td>Dye</td>
						<td className="warning">Pending</td>
						<td className="primary">Details</td>
					</tr> */}

				</tbody>
			</table>
			
		</div>
        	{/* <div className="recent-updates">
			<h2>Recent Updates</h2>
			<div className="updates">
				<div className="update">
					<div className="profile-photo">
						<img src="./images/profile-2.jpg" alt=""/>
					</div>
					<div className="message">
						<p><b>Amirul Islam </b> Received his order of a night glass</p>
						<small className="text-muted">2 Minutes Ago</small>
					</div>
				</div>

				<div className="update">
					<div className="profile-photo">
						<img src="./images/profile-3.jpg" alt=""/>
					</div>
					<div className="message">
						<p><b>Masud Rana </b> Received his order of a night pant of guard</p>
						<small className="text-muted">2 Minutes Ago</small>
					</div>
				</div>

				<div className="update">
					<div className="profile-photo">
						<img src="./images/profile-4.jpg" alt=""/>
					</div>
					<div className="message">
						<p><b>Sohag Hasan </b> Received his order of a royel sword</p>
						<small className="text-muted">2 Minutes Ago</small>
					</div>
				</div>

				<div className="update">
					<div className="profile-photo">
						<img src="./images/profile-1.jpg" alt=""/>
					</div>
					<div className="message">
						<p><b>Shakil Hasan </b> Received his order of a Girl Friend :) </p>
						<small className="text-muted">2 Minutes Ago</small>
					</div>
				</div>
			</div>
		</div> */}
    </>
  )
}

export default DashboardPart3