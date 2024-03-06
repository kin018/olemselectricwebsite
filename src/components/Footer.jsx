import React from 'react';
import { Link } from 'react-scroll';
import {
  Copyright,
  FooterMainContainer,
  FooterLink,
  FooterName,
  FooterNav,
  FooterWrapper,
} from '../styledComponents/StyledComponents';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterMainContainer>
      <FooterWrapper>
        <FooterName>Olem's Electric</FooterName>
        <FooterNav>
          <Link to="about" smooth duration={300} offset={-100}>
            <FooterLink>About</FooterLink>
          </Link>
          <Link to="services" smooth duration={300} offset={-100}>
            <FooterLink>Services</FooterLink>
          </Link>
          <Link to="testimonials" smooth duration={300} offset={-100}>
            <FooterLink>Testimonials</FooterLink>
          </Link>
          <Link to="contact" smooth duration={300} offset={-100}>
            <FooterLink>Contact</FooterLink>
          </Link>
          <Link to="review" smooth duration={300} offset={-100}>
            <FooterLink>Leave us a Review</FooterLink>
          </Link>
        </FooterNav>
        <>
          This is a filler for either social media or other functionality in
          footer
        </>
        <Copyright>
          &copy; {currentYear} Olem's ELectric LLC. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterMainContainer>
  );
}

export default Footer;
