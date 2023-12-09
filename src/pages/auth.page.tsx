import { exportCallDataGroth16FromPCD, verify } from "anon-aadhaar-pcd";
import { AnonAadhaarProof, LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";

const AuthPage = () => {
    const [anonAadhaar] = useAnonAadhaar();

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
        <>
        <div>
            <LogInWithAnonAadhaar />
            <p>{anonAadhaar?.status}</p>
        </div>
        <div >
        {/* Render the proof if generated and valid */}
        {anonAadhaar?.status === "logged-in" && (
          <>
            <p>✅ Proof is valid</p>
            <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)}/>
            
          </>
          )}
      </div>
      </>
    );
}

export default AuthPage