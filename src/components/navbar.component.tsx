import styled from '@emotion/styled';
import { Logo } from '../assets';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAnonAadhaar } from 'anon-aadhaar-react';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  color: #fff;
  padding: 1rem;
`;

const LogoImage = styled.img`
    height: 50px;
    cursor: pointer;
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1rem;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;

const NewFlag = styled.span`
  background-color: #ff0000;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -20px;
  margin-top: -5px;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  background: linear-gradient(45deg, #1976D2, #6dd5e5);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;


const NavbarComponent = () => {

  const navigate = useNavigate();
  const [anonAadhaar] = useAnonAadhaar();

  const handleRoute = () => {
    if(anonAadhaar && anonAadhaar.status === "logged-in"){
      navigate("../register")
    } else navigate("../")
  }

  return (
    <NavbarContainer>
      <LogoImage src={Logo} onClick={() => navigate("/home")}>
      </LogoImage>

      <NavLinks>
        <NavItem>
          <Button color="primary" onClick={() => navigate("/home")}> Home </Button>
        </NavItem>

        <NavItem>
          <NewFlag>New</NewFlag>
          <Button color="primary" onClick={() => handleRoute()}> Digivoter Registration </Button>
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  )
}

export default NavbarComponent