import React from 'react'
import Chart from './Chart'
import DashboardPart4 from './DashboardPart4'

const DashboardPart2 = () => {
  return (
    <>
      <div className="row pt-4">
        <div className="col-md-8">
             <div className='bg-white'>
	            <div className="p-3">
              <h3 className=''>Sales Statics</h3>
                  <Chart/>
              </div>
			  </div>
        </div>
        <div className="col-md-4">
		    <div className='bg-white'>
			<h3 className='py-3'>Visitors</h3>
			</div>
            {/* <DashboardPart4/> */}
        </div>
      </div>
    </>
  )
}

export default DashboardPart2