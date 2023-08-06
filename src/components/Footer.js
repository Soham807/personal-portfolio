import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import React, { Component }  from 'react';

import ReactDOM from 'react-dom'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <h5 className="logo_txtf">Soham's Portfolio</h5>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-iconf">
              <a href="https://www.linkedin.com/in/soham-patel-3087ba212/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
