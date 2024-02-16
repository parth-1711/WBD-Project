import React from 'react';
import './CSS/aboutUs.css';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'


const AboutUsimports = () => {
    return (
      <head>
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About-Us</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="/CSS/aboutUs.css" />
      </head>
    );
  };
const AboutUs_1 = () => {
  return (
    <div style={{backgroundColor:'#8B2BE6'}}>
      <div className="top-div">
        <div className="homeIcon"><a href="/"><i className="fas fa-home homehover" style={{ color: 'white' }}></i></a></div>
        <div className="logo-flex">
          <div>
            <a className="aboutUs-twitter" href=""><i className="fab fa-twitter" style={{ fontSize: '36px', paddingBottom: '23px', color: 'rgb(212, 225, 237)' }}></i></a>
          </div>
          <div>
            <a className="aboutUs-instagram" href=""><i className="fab fa-instagram" style={{ fontSize: '36px', paddingBottom: '23px', color: 'rgb(231, 135, 187)' }}></i></a>
          </div>
          <div>
            <a className="aboutUs-gmail" href=""><i className="fas fa-envelope" style={{ fontSize: '36px', color: 'rgb(255, 255, 255)' }}></i></a>
          </div>
        </div>
      </div>
      <div className="heading">
        <h1>About PHOENIX</h1>
        <p>PHOENIX E-MART is an online platform for buying and selling of 2<sup>nd</sup> hand/used products.</p>
      </div>
      <div className="headingB">
        <b><p>DISCOVER HIDDEN GEMS AT UNBEATABLE PRICES WITH OUR SECONDHAND STORE</p></b>
      </div>
      <section className="about-us">
        <img src="/images/aboutusimg.jpg" alt="img" />
        <div className="content">
          <h2 style={{ color: 'black' }}>Experience</h2>
          <p style={{ color: 'black' }}>It is a newly formed website currently under progress.
            Currently languages used in the making of this website are :
            1. HTML
            2. CSS
            3. Javascript
            4. Node, Express JS
            5. EJS
            6. SQL
          </p>
        </div>
      </section>
      <section className="about-us2" style={{ margin: '20px', marginBottom: '60px' }}>
        <div className="content2">
          <h2 style={{ color: 'white' }}>Team</h2>
          <p>
            <ul style={{ color: 'white' }}>
              <li>Parth Irache</li>
              <li>Digvijay Ghule</li>
              <li>Rithick E</li>
              <li>Sandeepkumar D</li>
              <li>Krishnamurthy</li>
            </ul>
          </p>
        </div>
        <img src="/images/aboutusimg.jpg" alt="img" />
      </section>
    </div>
  );
};

export {AboutUs_1, AboutUsimports};
