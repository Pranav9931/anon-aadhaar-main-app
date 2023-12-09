import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, IconButton } from '@mui/material';

import data from '../database/qanda.json';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ChatbotComponent = ({ state }: any) => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [isPrinting, setIsPrinting] = useState(false);
    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    };

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();

        // Find the answer to the user's question
        const answer = data.data.find((item: any) => item.ques.toLowerCase() === input.toLowerCase())?.ans;

        // Set the response to display the answer, or a message if no answer was found
        if (answer) {
            setIsPrinting(true);
            for (let i = 0; i < answer.length; i++) {
                setResponse((prevResponse) => prevResponse + answer[i]);
                await new Promise((resolve) => setTimeout(resolve, 10)); // add a delay between each letter
            }
            setIsPrinting(false);
        } else {
            setResponse("I'm sorry, I don't know the answer to that question.");
        }

        // Clear the input field
        // setInput('');
    };

    const navigate = useNavigate();

    return (
        <Container sx={{ maxWidth: '600px', padding: '50px' }}>
            <Box sx={{ backgroundColor: '#F0F2F5', padding: '20px', borderRadius: '10px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                        NETA GPT
                    </Typography>
                    <IconButton color="primary" aria-label="add to shopping cart" sx={{ width: "70px", height: '70px', background: '#1976d230' }} onClick={() => state(false)}>
                        <Close />
                    </IconButton>
                </div>
                <Typography color="primary" sx={{ fontSize: '12px', marginBottom: '10px' }}>All the information which NETA GPT provides is directly fetched from NERPAP stands for National Electoral Roll Purification and Authentication Program, which is an initiative of the Election Commission of India (ECI)</Typography>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        label="Ask a question"
                        variant="outlined"
                        fullWidth
                        value={input}
                        onChange={handleInputChange}
                        sx={{ marginBottom: '20px' }}
                    />
                    <Button variant="contained" type="submit" sx={{ height: '50px' }} fullWidth>
                        Submit
                    </Button>
                </form>
                {response && (
                    <Box
                        dangerouslySetInnerHTML={{ __html: isPrinting ? response + '<span class="cursor">|</span>' : response }}
                        sx={{
                            marginTop: '20px',
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                )}
            </Box>
        </Container>
    );
};

export default ChatbotComponent;