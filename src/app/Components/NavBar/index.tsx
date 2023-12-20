"use client"
import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.div`
  width: 961px;
  color: #1E1E1E;
  font-family: Ubuntu;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  margin-right: 10px;
  color: inherit;
  text-decoration: none;
  position: relative;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: #1E1E1E;
    }
  }

  &:active {
    &::after {
      background-color: red; /* Change to your desired active color */
    }
  }
`;

const NavBar = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="/images/RIA_LOGO.pdf-removebg-preview.png"
        style={{ marginRight: "10px", height: "70px", marginBottom: "50px" }}
        alt="Logo"
      />
      <div style={{ marginBottom: "80px" }}>
        <div
          style={{
            color: "#1E1E1E",
            fontFamily: "Ubuntu",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          R O S E L L A
        </div>
        <div
          style={{
            color: "#1E1E1E",
            fontFamily: "Ubuntu, Arial, sans-serif",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          GROUP AFRICA LIMITED
        </div>
      </div>
      <div style={{ marginLeft: "50px", marginBottom: "70px" }}>
        <StyledNavBar>
          <StyledLink href="/">HOME</StyledLink>
          <StyledLink href="/about">ABOUT US</StyledLink>
          <StyledLink href="/services">OUR SERVICES</StyledLink>
          <StyledLink href="/locations">LOCATIONS</StyledLink>
          <StyledLink href="/contact">CONTACT US</StyledLink>
          <StyledLink href="/blogs">BLOGS</StyledLink>
        </StyledNavBar>
      </div>
    </div>
  );
};

export default NavBar;