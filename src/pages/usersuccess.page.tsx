import styled from '@emotion/styled'
import { SuccessImage } from '../assets';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SuccessContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SuccessTab = styled.div`
    width: 400px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: #3bdb30;
`;

const Image = styled.img`
    width: 100px;
`;

const UserSuccess = () => {

    const navigate = useNavigate();
    return (
        <SuccessContainer>
            <SuccessTab>
                <Image src={SuccessImage}></Image>
                User is created successfully.
                <Button color="primary" onClick={() => navigate("/home")}>Navigate to Home</Button>
            </SuccessTab>

        </SuccessContainer>
    )
}

export default UserSuccess