import { AnonAadhaarProvider } from "anon-aadhaar-react";
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { AuthPage, DigivoterRegistration, HomePage, ImageRecognition, UserDashboard, UserSuccess} from './pages';
import { FooterComponent, NavbarComponent } from "./components";
import styled from "@emotion/styled";

const NavBottomLine = styled.div`
  width: 100%;
  height: 50px;
  background: #1976D240;
  color: #1976D2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {

  const app_id = "1399107725243036060556886033268254560826054148096";
  console.log(app_id)
  return (
    <AnonAadhaarProvider _appId={app_id} _isWeb={false}>
      <NavbarComponent />
      <NavBottomLine>
        Bringing Democracy to your fingertips. <span style={{ fontWeight: 700, margin: '0 0 0 5px' }}>#ETHIndia'23</span>
      </NavBottomLine>
      <Routes>
        <Route path="/" element={<AuthPage />}/>
        <Route path="/home" element={<><HomePage /><FooterComponent /></>} />
        <Route path="/register" element={<DigivoterRegistration />} />
        <Route path="/scanface/verification" element={<ImageRecognition />} />
        <Route path="/usercreation/success" element={<UserSuccess />} />
        <Route path="/user/dashboard/:id" element={<UserDashboard />} />
      </Routes>
    </AnonAadhaarProvider>
  )
}

export default App
