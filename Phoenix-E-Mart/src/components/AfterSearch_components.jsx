import React from 'react';
import './CSS/HomeStyles.css';
import './CSS/navbar.css';
// import './AfterSearch.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

const Aftersearch = (props) => {
    const productList = [
        {
          _id: '1',
          title: 'Sample Product 1',
          setprice: 100,
          address: 'Sample Address 1',
          howold: '1 month',
        },
        {
          _id: '2',
          title: 'Sample Product 2',
          setprice: 150,
          address: 'Sample Address 2',
          howold: '2 weeks',
        },
        {
          _id: '3',
          title: 'Sample Product 3',
          setprice: 120,
          address: 'Sample Address 3',
          howold: '3 months',
        },
        {
          _id: '4',
          title: 'Sample Product 4',
          setprice: 200,
          address: 'Sample Address 4',
          howold: '2 months',
        },
        {
          _id: '5',
          title: 'Sample Product 5',
          setprice: 180,
          address: 'Sample Address 5',
          howold: '1 week',
        },
        {
          _id: '6',
          title: 'Sample Product 6',
          setprice: 250,
          address: 'Sample Address 6',
          howold: '4 weeks',
        },
        {
          _id: '7',
          title: 'Sample Product 7',
          setprice: 130,
          address: 'Sample Address 7',
          howold: '2 days',
        },
        {
          _id: '8',
          title: 'Sample Product 8',
          setprice: 170,
          address: 'Sample Address 8',
          howold: '5 months',
        },
        {
          _id: '9',
          title: 'Sample Product 9',
          setprice: 220,
          address: 'Sample Address 9',
          howold: '3 weeks',
        },
        {
          _id: '10',
          title: 'Sample Product 10',
          setprice: 190,
          address: 'Sample Address 10',
          howold: '6 months',
        },
      ];

      
  return (
    
    <div className='justify-center p-16 ml-10'>
      {props.productList.map((product, i) => (
        <div key={i} className="pdtelem">
          <div className="sort-product">
            <img src={product.imgs[0]} style={{ objectFit: 'contain' }} alt={product.title} />

            <div className="pdtdetails">
              <div style={{ fontSize: '25px',color:'black' }}>
                {product.title}
              </div>
              <div style={{ fontWeight: 700, color: 'rgb(104, 103, 103)', fontSize: '18px', paddingTop: '5px' }}>
                ₹ {product.expectedPrice}
              </div>

              <div style={{ color: 'rgb(104, 103, 103)', fontSize: '15px', paddingTop: '5px' }}>
                {product.address}
              </div>

              <div style={{ color: 'gray', fontSize: '15px', paddingTop: '5px' }}>
                {product.oldness} old
              </div>
              <div style={{ color: 'gray', fontSize: '13px' }}>
                posted 5 days ago
              </div>
            </div>

            <div className="detailsbtn" style={{ width: '20vw' }}>
              <a href={`/productDetails?param=${product._id}`}>
                <button type="submit" className="btn btn-success" style={{ position: 'absolute', right: '400px', backgroundColor: 'rgb(111, 20, 197)' }}>
                  More Details
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aftersearch;
