import { AnonAadhaarProvider } from "anon-aadhaar-react";
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './pages';


function App() {

  const app_id = "1399107725243036060556886033268254560826054148096";
  console.log(app_id)
  return (
    <AnonAadhaarProvider _appId={app_id} _isWeb={true}>
      <Routes>
        <Route path="/" element={<AuthPage />}/>
      </Routes>
    </AnonAadhaarProvider>
  )
}

export default App
