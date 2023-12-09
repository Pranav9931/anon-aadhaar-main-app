import { Alert, Button, Snackbar, Typography } from "@mui/material";
import { exportCallDataGroth16FromPCD, verify } from "anon-aadhaar-pcd";
import { AnonAadhaarProof, LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AuthProviderWrapper  = styled.div`
    width: 500px;
    height: 600px;
    background: #444;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    border-radius: 20px;
`

const AuthPage = () => {
    const [anonAadhaar] = useAnonAadhaar();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      console.log("Anon Aadhaar status: ", anonAadhaar.status);
      const SendProofOnChain = async () => {
        if(anonAadhaar?.status && anonAadhaar?.status === "logged-in"){
            try{
                const {a, b, c, Input} = await exportCallDataGroth16FromPCD(anonAadhaar.pcd);
                console.log(a)
                console.log(b)
                console.log(c)
                console.log(Input)
                setSuccess(true);

            } catch (err) {
                console.log(err);
            }
        } else return;
      }
      SendProofOnChain();
      
    }, [anonAadhaar]);

    useEffect(() => {
        const verifyAadhaarPCD = async () => {
            
            if(anonAadhaar?.status && anonAadhaar?.status === "logged-in"){
                const data = await verify(anonAadhaar.pcd)
                console.log("IsAadhaarVerified:", data);
            }
        }
        verifyAadhaarPCD();
    },[anonAadhaar])
  
    return (
        <AuthProviderWrapper>
        <div>
            {anonAadhaar?.status === "logged-out" && <Typography sx={{fontSize: '20px', margin: "10px 0"}}>Verify Your Aadhaar First</Typography>}
            <LogInWithAnonAadhaar />
            <p>{anonAadhaar?.status}</p>
        </div>
        <div>
        {/* Render the proof if generated and valid */}
        {anonAadhaar?.status === "logged-in" && (
          <>
            <p>✅ Proof is valid</p>
            <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)}/><br />
            <Button
                sx={{
                    background: '#f2ff5220',
                    color: '#f2ff52',
                    margin: '10px 0'
                }}
                onClick={() => navigate("../home")}
            >
                Navigate to Dashboard
            </Button>
          </>
          )}
      </div>
      {success && (
                    <Snackbar open={success}>
                        <Alert severity="success" sx={{ backgroundColor: '#43a047' }}>
                            <Typography align="center">
                                Success! Proof verified on chain
                            </Typography>
                        </Alert>
                    </Snackbar>
                )}
      </AuthProviderWrapper>
    );
}

export default AuthPage