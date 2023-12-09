import styled from '@emotion/styled';
import React from 'react';

const FooterContainer = styled.div`
  background-color: #f2f2f2;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

const FooterDisclaimer = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin-top: 2rem;
  text-align: center;
`;

const FooterHeadline = styled.h6`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1976d2;

  @media (min-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 2rem;
  }
`;

const FooterLink = styled.a`
  color: #555;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: block;

  &:hover {
    color: #1976d2;
    text-decoration: underline;
  }
`;

const FooterLinks = styled.div`
  margin-bottom: 0.5rem;
`;


const FooterComponent: React.FC = () => {
    return (
        <>
            <FooterContainer>
                <div className="breaker">
                    <FooterHeadline>About ECI</FooterHeadline>
                    <FooterLinks>
                        <FooterLink href="#">Commission</FooterLink>
                        <FooterLink href="#">Officers Directory</FooterLink>
                        <FooterLink href="#">Contact Us</FooterLink>
                    </FooterLinks>
                </div>
                <div className="breaker">
                    <FooterHeadline>Quick Links</FooterHeadline>
                    <FooterLinks>
                        <FooterLink href="#">Apply for Voter Card</FooterLink>
                        <FooterLink href="#">Public Grievance</FooterLink>
                        <FooterLink href="#">RTI Online</FooterLink>
                        <FooterLink href="#">Political Parties Registration Tracking Management System</FooterLink>
                        <FooterLink href="#">Observer Portal</FooterLink>
                        <FooterLink href="#">MCC Cases</FooterLink>
                        <FooterLink href="#">Download cVIGIL</FooterLink>
                        <FooterLink href="#">Candidate Affidavits</FooterLink>
                    </FooterLinks>
                </div>


                <div className="breaker">
                    <FooterHeadline>Media &amp; Publications</FooterHeadline>
                    <FooterLinks>
                        <FooterLink href="#">Current Issues</FooterLink>
                        <FooterLink href="#">Press Releases</FooterLink>
                        <FooterLink href="#">Important Instructions</FooterLink>
                        <FooterLink href="#">Handbooks</FooterLink>
                        <FooterLink href="#">Results And Statistics</FooterLink>
                        <FooterLink href="#">Manuals</FooterLink>
                        <FooterLink href="#">Compendium of Instructions</FooterLink>
                        <FooterLink href="#">Library &amp; Publications</FooterLink>
                    </FooterLinks>
                </div>
                <div className="breaker">
                    <FooterHeadline>ECI Divisions</FooterHeadline>
                    <FooterLinks>
                        <FooterLink href="#">Communication</FooterLink>
                        <FooterLink href="#">Delimitation</FooterLink>
                        <FooterLink href="#">Expenditure</FooterLink>
                        <FooterLink href="#">International Cooperation</FooterLink>
                        <FooterLink href="#">ICT</FooterLink>
                        <FooterLink href="#">Political Parties</FooterLink>
                        <FooterLink href="#">Election Planning</FooterLink>
                        <FooterLink href="#">Accessibility &amp; Inclusion</FooterLink>
                    </FooterLinks>

                </div>

                <div className="breaker">

                    <FooterHeadline>Explore More</FooterHeadline>
                    <FooterLinks>
                        <FooterLink href="#">SVEEP</FooterLink>
                        <FooterLink href="#">India A-WEB Centre</FooterLink>
                        <FooterLink href="#">Service Voter Portal</FooterLink>
                        <FooterLink href="#">VoiceNet</FooterLink>
                    </FooterLinks>
                </div>
            </FooterContainer>
            <FooterDisclaimer>
                &copy; 2023 Election Commission of India. All Rights Reserved.
            </FooterDisclaimer>
        </>
    );
}

export default FooterComponent;
