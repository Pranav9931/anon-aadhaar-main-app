import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { Logo } from '../assets';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Image = styled.img`
    height: 50px;
`;

const DigivoterRegistration = () => {

    const handleRegister = (str = "/scanface/verification") => {
        navigate(`${str}`);
        // handle register logic
    };

    const navigate = useNavigate()

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                    height: "80vh",
                }}
            >
                <Image src={Logo}></Image>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        bgcolor: "background.paper",
                        p: 4,
                        borderRadius: '10px',
                        boxShadow: 5,
                        minWidth: '400px'
                    }}
                >
                    <Typography variant="h5" color="primary" mb={3} sx={{ fontWeight: 700 }}>
                        Register for DigiVoter
                    </Typography>
                    <Box component="form" onSubmit={(e) => e.preventDefault()}
                        sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >

                        <TextField
                            variant="outlined"
                            label="Full Name"
                            type="text"
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            variant="outlined"
                            label="Aadhaar Number"
                            type="text"
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            variant="outlined"
                            label="EPIC Number"
                            type="text"
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            variant="outlined"
                            label="Mobile Number"
                            type="text"
                            sx={{ mb: 2 }}
                            required
                        />

                        <TextField
                            variant="outlined"
                            label="Wallet Address"
                            type="text"
                            sx={{ mb: 2 }}
                            required
                        />

                        <Button variant="contained" type="submit" sx={{ mb: 2, height: '50px' }} onClick={() => handleRegister("/scanface/verification")}>
                            Register
                        </Button>
                        <Typography variant="body2">
                            Already have an account?
                            <Button color="primary" onClick={() => navigate("/login")}>
                                Login
                            </Button>
                        </Typography>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default DigivoterRegistration