import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function SellHome() {
  return (
    <div className="p-3 bg-light">
        <div className="container-fluid d-flex mt-2">
            <div className=" col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light"> 
                <div className='d-flex justify-content-around p-4 align-items-center bg-white text-dark border border-secondary shadow-sm'> 
                <i className="bi bi-currency-rupee fs-1 text-success"></i>
                    <div>
                        <span>Sales</span>
                        <h2 style={{fontWeight:'25px' ,fontSize:'30px'}}>234</h2>
                    </div>
                </div>
            </div>
            <div className=" col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light"> 
                <div className='d-flex justify-content-around p-4 align-items-center bg-white text-dark border border-secondary shadow-sm'>
                <i className="bi bi-truck fs-1 text-primary"></i>
                    <div> 
                        <span>Delivery</span>
                        <h2 style={{fontWeight:'25px' ,fontSize:'30px'}}>240</h2>
                    </div>
                </div>
            </div>
            <div className=" col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light"> 
                <div className='d-flex justify-content-around p-4 align-items-center bg-white text-dark border border-secondary shadow-sm'>
                <i className="bi bi-graph-up-arrow fs-1  text-danger"></i>
                    <div> 
                        <span>Increase</span>
                        <h2 style={{fontWeight:'25px' ,fontSize:'30px'}}>20%</h2>
                    </div>
                </div>
            </div>
            <div className=" col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light"> 
                <div className='d-flex justify-content-around p-4 align-items-center bg-white text-dark border border-secondary shadow-sm'>
                <i className="bi bi-currency-rupee fs-1 text-warning"></i>
                    <div> 
                        <span>Total Earnings</span>
                        <h2 style={{fontWeight:'25px' ,fontSize:'30px'}}>40000</h2>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SellHome