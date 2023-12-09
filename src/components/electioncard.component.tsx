import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React from 'react'


const ElectionCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #f2f2f2;
    padding: 10px;
    width: 250px;
    border-radius: 10px;
`;

const Image = styled.img`
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
`

const ElectionsCard = ({ obj }: any) => {
    return (
        <ElectionCardContainer>
            <div style={{ flex: 1 }}>
                <Image src={obj.coverImage}></Image>
                <Typography color="primary" sx={{ fontWeight: 700, margin: '10px 0' }}>{obj.electionName}</Typography>
                <Typography color="#00000050">{obj.desc.slice(0, 50) + "..."}</Typography>
                <div style={{ display: 'flex', gap: '5px', margin: '10px 0' }}>
                    <Typography color="primary" sx={{ fontWeight: 600 }}>Date:</Typography>
                    <Typography>{obj.votingDates[0].date}</Typography>
                </div>
            </div>
            <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: '5px', height: '40px' }}
            >
                Proceed
            </Button>
        </ElectionCardContainer>
    )
}

export default ElectionsCard