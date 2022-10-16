import React from 'react'

const DashboardPart4 = () => {
  return (
    <>
        <div class="sales-analytics">
			<h2>Sales Analytics</h2>
			<div class="item online">
				<div class="icon">
					<span class="material-icons-sharp">
						shopping_cart</span>
				</div>
				<div class="right">
					<div class="info">
						<h3>ONLINE ORDERS</h3>
						<small class="text-muted">last 24 Hours</small>
					</div>
					<h5 class="success">+39%</h5>
					<h3>3894</h3>
				</div>
			</div>
			<div class="item offline">
				<div class="icon">
					<span class="material-icons-sharp">
						local_mall</span>
				</div>
				<div class="right">
					<div class="info">
						<h3>OFFLINE ORDERS</h3>
						<small class="text-muted">last 24 Hours</small>
					</div>
					<h5 class="danger">-10%</h5>
					<h3>2894</h3>
				</div>
			</div>
			<div class="item customers">
				<div class="icon">
					<span class="material-icons-sharp">
						person</span>
				</div>
				<div class="right">
					<div class="info">
						<h3>NEw Customers</h3>
						<small class="text-muted">last 24 Hours</small>
					</div>
					<h5 class="success">-21%</h5>
					<h3>894</h3>
				</div>
			</div>
			<div class="item add-product">
				<div class="add">
					<span class="material-icons-sharp">
						add</span>
					<h3>Add Product</h3>
				</div>
			</div>
		</div>
    </>
  )
}

export default DashboardPart4