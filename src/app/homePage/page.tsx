import React from "react";
import NavBar from "../Components/NavBar/index";
import { FiAlertCircle } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';

import { FaCheckCircle } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#FFFCFC" }}>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <div style={{ transform: "rotate(90deg)", marginLeft: "120px" }}>
          <img src="/images/haapppy-removebg-preview.png" alt="Rotated Image" style={{ width: "300px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "300px" }}>
          <h2 style={{ color: "#1E1E1E", fontFamily: "Ubuntu", fontSize: "40px", fontStyle: "normal", fontWeight: 600, lineHeight: "normal" }}>
            MAKE YOUR INSURE LIFE <br />
            <span style={{ color: "#1E1E1E" }}>SIMPLER.</span>
          </h2>
          <br />
          <div style={{ color: "#1E1E1E", fontFamily: "Ubuntu", fontSize: "20px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>
            We work with several leading insurance companies to make sure <br />we meet your needs.
          </div>
          <button style={{ width: "121px", height: "40px", borderRadius: "3px", background: "#001D37", color: "#FFFFFF", fontFamily: "Ubuntu", fontSize: "10px", fontStyle: "normal", fontWeight: 700, marginTop: "17px" }}>
            GET CONSULTATION
          </button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex:1 }}>
          <h3 style={{ color: "#1E1E1E", fontSize: "20px", fontWeight: 700, marginLeft: "50px" }}>OUR SERVICES</h3>
          <h1 style={{ color: "#1E1E1E", fontSize: "60px", fontWeight: 700, marginLeft: "50px" }}>Insurance made <br />Simpler for you</h1>
          <p style={{ color: "#000", fontFamily: "Ubuntu", fontSize: "25px", marginLeft: "50px", fontWeight: 400, flexShrink: 0 }}>
            We work with several leading insurance <br/> companies
            to secure insurance coverages<br /> tailored to meet
            your needs.
          </p>
          <div style={{ marginTop: "23px" }}>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "50px" }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaCheckCircle size={30} color="#D27C2C" />
                <div style={{ marginLeft: "13px", width: '100%', height: '100%', color: '#001D37', fontSize: 23, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word' }}>Flexible products to make your life easier</div>
              </div>
            </div>
            <br />
            <div style={{ marginLeft: "45px", display: 'flex', alignItems: 'center' }}>
              <FaCheckCircle size={30} color="#D27C2C" />
              <div style={{ width: '100%', height: '100%', color: '#001D37', fontSize: 23, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word', marginLeft: "13px" }}>Highest standards of service</div>
            </div>
            <br />
            <div style={{ marginLeft: "45px", display: 'flex', alignItems: 'center' }}>
              <FaCheckCircle size={30} color="#D27C2C" />
              <div style={{ width: '100%', height: '100%', color: '#001D37', fontSize: 23, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word', marginLeft: "13px" }}>Fast and reliable service</div>
            </div>
          </div>
        </div>
        <div style={{ background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15, marginRight: "150px", width: "550px", marginBottom: "", position: "relative", top: "0",height:"240px" }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FiAlertCircle size={30} color="#D27C2C" />
            <div style={{ width: '100%', height: '100%', color: '#001D37', fontSize: 23, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word',marginLeft:"66px",marginTop:"40px" }}>General Insurance</div>
          </div>
          <div style={{ color: 'black', fontSize: 17, fontFamily: 'Ubuntu', fontWeight: '300', wordWrap: 'break-word',marginTop:"30px",marginLeft:"86px"}}>General insurance is a type of insurance policy that<br />provides cover for your general needs</div>
          <div style={{ color: '#001D37', fontSize: 20, fontFamily: 'Ubuntu', fontWeight: '500', wordWrap: 'break-word',marginTop:"30px",marginLeft:"86px" }}>Learn more</div>
        </div>
        <div>
        <div style={{display:"flex",marginLeft:"700px"}}>
      <div style={{marginBottom:"50px", background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15,  width: "284px",height:"240px" }}>
      <div style={{ marginBottom:"60px",display: 'flex', alignItems: 'center' }}>
      <FiHeart size={30} color="#D27C2C" />
      <div style={{ width: '100%', height: '100%', color: '#001D37', fontSize: 23, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word',marginLeft:"66px",marginTop:"40px" }}>Health Insurance</div>
      </div>
    <div style={{ color: 'black', fontSize: 17, fontFamily: 'Ubuntu', fontWeight: '300', wordWrap: 'break-word',marginTop:"30px",marginLeft:"86px"}}>Helping you bridge gaps in your healthcare coverage in your times of transition.</div>
    <div style={{ color: '#001D37', fontSize: 20, fontFamily: 'Ubuntu', fontWeight: '500', wordWrap: 'break-word',marginTop:"30px",marginLeft:"86px" }}>Learn more</div>
     </div>
  <div style={{ background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15, width: "284px", height:"240px" }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FiAlertCircle size={30} color="#D27C2C" />
      <div style={{ width: '100%', height: '100%', color: '#001D37', fontSize: 23, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word',marginLeft:"66px",marginTop:"40px" }}> Car Insurance</div>
    </div>
    <div style={{ color: 'black', fontSize: 17, fontFamily: 'Ubuntu', fontWeight: '300', wordWrap: 'break-word',marginTop:"30px",marginLeft:"56px"}}>Car insurance is a type of insurance policy that provides cover for your car</div>
    <div style={{ color: '#001D37', fontSize: 20, fontFamily: 'Ubuntu', fontWeight: '500', wordWrap: 'break-word',marginTop:"30px",marginLeft:"86px" }}>Learn more</div>
  </div>
   </div>
 


      </div>
      <div style={{display:"flex",marginLeft:"700px"}}>
      <div style={{marginBottom:"50px", background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15,  width: "284px",height:"240px" }}>
      <div style={{ marginBottom:"60px",display: 'flex', alignItems: 'center' }}>
      <FiHeart size={30} color="#D27C2C" />
      <div style={{ width: '100%', height: '100%', color: '#001D37', fontSize: 23, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word',marginLeft:"66px",marginTop:"40px" }}>Health Insurance</div>
      </div>
    <div style={{ color: 'black', fontSize: 17, fontFamily: 'Ubuntu', fontWeight: '300', wordWrap: 'break-word',marginTop:"30px",marginLeft:"86px"}}>Helping you bridge gaps in your healthcare coverage in your times of transition.</div>
    <div style={{ color: '#001D37', fontSize: 20, fontFamily: 'Ubuntu', fontWeight: '500', wordWrap: 'break-word',marginTop:"30px",marginLeft:"86px" }}>Learn more</div>
     </div>
  <div style={{ background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15, width: "284px", height:"240px" }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FiAlertCircle size={30} color="#D27C2C" />
      <div style={{ width: '100%', height: '100%', color: '#001D37', fontSize: 23, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word',marginLeft:"66px",marginTop:"40px" }}> Car Insurance</div>
    </div>
    <div style={{ color: 'black', fontSize: 17, fontFamily: 'Ubuntu', fontWeight: '300', wordWrap: 'break-word',marginTop:"30px",marginLeft:"56px"}}>Car insurance is a type of insurance policy that provides cover for your car</div>
    <div style={{ color: '#001D37', fontSize: 20, fontFamily: 'Ubuntu', fontWeight: '500', wordWrap: 'break-word',marginTop:"30px",marginLeft:"86px" }}>Learn more</div>
  </div>
   </div>
    </div>
    </div>
  );
};

export default HomePage;