import styled from '@emotion/styled'
import { ETHIndiaPoster } from '../assets';
import { ElectionsCard } from '../components';
import { Typography } from '@mui/material';

import ElectionData from "../database/index.json"


const HomepageContainer = styled.div`
    padding: 1em;
`;

const MainImage = styled.img`
    width: 100%;
    border-radius: 10px;
    height: 450px;
`;

const HonourableCommission = styled.div`
    width: 400px;
    min-height: 300px;
    background: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    @media (max-width: 1000px){
        width: 500px;
    }
`;

const CommissionsImage = styled.img`
    height: 90px;
    width: 80px;
    border-radius: 5px;
`;

const CommissionCard = styled.div`
    display: flex;
    background: #1976D2;
    margin: 10px 0 0 0;
    padding: 5px;
    border-radius: 10px;
    gap: 15px;
`;

const LiveVoting = styled.div`
    display: flex;
    // justify-content: center;
    flex-direction: column;
    
`

const HomePage = () => {

    console.log(ElectionData)

    return (
        <HomepageContainer>
            <MainImage src={ETHIndiaPoster}>
            </MainImage>
            <br />
            <br />
            <div style={{ display: 'flex', gap: '20px' }}>
                <HonourableCommission>
                    <Typography color="primary" sx={{
                        fontWeight: 700,
                        fontSize: '16px'
                    }}>
                        Honourable Commissions

                    </Typography>
                    <CommissionCard>
                        <CommissionsImage src="https://eci.gov.in/img/ec-rk.jpg"></CommissionsImage>
                        <div className="wrapper">
                            <div className="honourable-mentions-title">
                                Sh. Rajiv Kumar
                            </div>

                            <div className="honourable-mentions-role">
                                CHIEF ELECTION COMMISSIONER
                            </div>
                        </div>
                    </CommissionCard>
                    <CommissionCard>
                        <CommissionsImage src="https://eci.gov.in/img/ec-acp.jpg"></CommissionsImage>
                        <div className="wrapper">
                            <div className="honourable-mentions-title">
                                Sh. Anup Chandra Pandey
                            </div>

                            <div className="honourable-mentions-role">
                                ELECTION COMMISSIONER
                            </div>
                        </div>
                    </CommissionCard>
                    <CommissionCard>
                        <CommissionsImage src="https://eci.gov.in/img/ec-ag.jpg"></CommissionsImage>
                        <div className="wrapper">
                            <div className="honourable-mentions-title">
                                Sh. Arul Goel
                            </div>

                            <div className="honourable-mentions-role">
                                ELECTION COMMISSIONER
                            </div>
                        </div>
                    </CommissionCard>
                </HonourableCommission>
                <LiveVoting>
                    <div>
                        <Typography variant="h6" color="primary" mb={2} sx={{ fontWeight: 700 }}>Elections</Typography>
                    </div>
                    <Typography color="primary" mb={1} sx={{ fontWeight: 500 }}>Details of Live and Upcoming Elections</Typography>

                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        {ElectionData.data.map((item) => {
                            return (
                                <ElectionsCard obj={item} />
                            )
                        })}
                    </div>

                </LiveVoting>
            </div>

        </HomepageContainer>
    )
}

export default HomePage