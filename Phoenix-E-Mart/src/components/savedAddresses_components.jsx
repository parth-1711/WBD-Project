import React, { useState } from 'react';
import './CSS/styles.css'
import './CSS/navbar.css'

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

const SavedAddresseshead = () => {
  return (
    <html>
      {/* <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Saved Addresses</title>
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />

        {/* External Stylesheets */}
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Bootstrap JS */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        {/* Custom Stylesheets */}
        {/* <link rel="stylesheet" href="/CSS/styles.css" />
        <link rel="stylesheet" href="/CSS/navbar.css" />
      </head> */}
      <body>
        {/* Your page content goes here */}
      </body>
    </html>
  );
};

const AddressList = () => {
    const Rows = {
        address: [
          '123 Main Street\nCityville\nCountry',
          '456 Elm Street\nTownsville\nCountry',
          '789 Oak Avenue\nVillagetown\nCountry',
          '101 Pine Lane\nHamletville\nCountry',
          '202 Maple Road\nRuraltown\nCountry',
        ],
      };
    let i = 1;

    return (
        <div className="Add-List" style={{marginLeft:'150px', marginRight:'350px'}}>
        <h2 style={{ paddingTop: '25px', color: 'rgb(77, 77, 77)', paddingBottom: '10px' }}>
            Your Addresses
        </h2>
        <hr />

        {Rows.address.map((row) => (
            <div key={i} className="">
            <div className="addresses-list">
                <p style={{ fontSize: '24px' }}>Address {i}</p>
                {i++}
                <hr />
                {row.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
                ))}
            </div>
            </div>
        ))}

        <br />
        <hr />
        <br />
        <br />
        </div>
    );
};



const AddNewAddressForm = () => {
  const [selectedRadio, setSelectedRadio] = useState('flexRadioDefault1');
  const [formData, setFormData] = useState({
    addlineone: '',
    addlinetwo: '',
    landmark: '',
    city: '',
  });

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    // Your validation logic goes here
    // Return true if the form is valid, false otherwise
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Your form submission logic goes here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="containbox" style={{marginLeft:'150px', marginRight:'450px'}}>
      <h3 style={{ paddingTop: '20px', color: 'rgb(83, 83, 83)' }}>
        <i style={{ paddingRight: '15px' }} className="fa fa-address-book-o"></i>Add a new address
      </h3>
      <hr />
      <form method="post" action={`/SavedAddress/`} onSubmit={handleSubmit} id="savdaddr-form">
        <div className="address">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked={selectedRadio === 'flexRadioDefault1'}
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Home
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked={selectedRadio === 'flexRadioDefault2'}
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Office
            </label>
          </div>
          <br />

          <p style={{ fontSize: '20px' }}>Flat, House no., Building, Apartment</p>
          <input className="addflat" id="addlineone" type="text" name="addlineone" onChange={handleInputChange} />
          <p style={{ fontSize: '10px', color: 'grey' }}>Address line 1</p>

          <p style={{ fontSize: '20px' }}>Area, Street, Sector, Village</p>
          <input className="addstreet" id="addlinetwo" type="text" name="addlinetwo" onChange={handleInputChange} />
          <p style={{ fontSize: '10px', color: 'grey' }}>Address line 2</p>

          <p style={{ fontSize: '20px' }}>Landmark</p>
          <input className="addlandmark" id="landmark" type="text" name="landmark" onChange={handleInputChange} />
          <br />
          <br />

          <p style={{ fontSize: '20px' }}>Town/City</p>
          <input
            type="text"
            id="city"
            className="addcity"
            name="city"
            onChange={handleInputChange}
          />
          <div id="warning" className="hidden" style={{ textAlign: 'center', color: 'crimson' }}>
            City Name shouldn't have any numbers or special characters!
          </div>
          <div id="empty-warning" className="hidden" style={{ textAlign: 'center', color: 'crimson' }}>
            Any field shouldn't be empty!
          </div>
          <button className="add-btn text-center pl-5" id="add-btn" style={{ position: 'relative', left: '37%' , width:'10px'}}>
            <div className='text-center' >+</div>
          </button>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};






export {SavedAddresseshead, AddressList, AddNewAddressForm};
