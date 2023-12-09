import { Button, Typography, Snackbar, Alert } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';

const ImageRecognition = () => {

    const navigate = useNavigate();

    let videoRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: true
        })
            .then((stream) => {
                const video = videoRef.current as unknown as HTMLVideoElement | undefined;
                if (video) {
                    video.srcObject = stream;
                    video.play();
                }
            })
            .catch((err) => console.log(err))
    }

    const handleCapture = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 5000);

        setTimeout(() => {
            navigate("/usercreation/success");
        }, 7000);
    }

    useEffect(() => {
        getUserCamera()
    }, [videoRef])

    return (
        <div className="facescan-container">
            <div className="facescan-content">
                <Typography color="primary" sx={{ fontWeight: 700, fontSize: '16px' }}>
                    Place your entire face in the Camera.
                </Typography>
                <br />
                <center>
                    <video className="facescan" ref={videoRef}></video>
                </center>
                <br />
                <LoadingButton
                    variant='contained'
                    sx={{ width: '100%', height: '50px' }}
                    loading={loading}
                    onClick={handleCapture}
                    disabled={success}
                >
                    {success ? 'Verified' : 'Capture Image'}
                </LoadingButton>
                {success && (
                    <Snackbar open={success}>
                        <Alert severity="success" sx={{ backgroundColor: '#43a047' }}>
                            <Typography variant="h6" align="center">
                                <strong>&#x2714;</strong>
                            </Typography>
                        </Alert>
                    </Snackbar>
                )}
            </div>
        </div>
    )
}

export default ImageRecognition
