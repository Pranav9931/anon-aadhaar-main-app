import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { blue, green, orange, red, grey } from '@mui/material/colors';

import userData from "../database/userDatabase.json"
import { Button, IconButton, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Chat } from '@mui/icons-material';
import { ChatbotComponent } from '../components';

interface UserProps {
    name: string;
    aadhaarCard: string;
    epicNumber: string;
    imageSrc: string;
}

interface ConstituencyProps {
    state: string;
    district: string;
    constituency: string;
}

const UserDashboardComponent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
`;

const TableWrapper = styled.div`
    margin-top: 20px;
`;

const TableTitle = styled.h2`
    font-size: 18px;
    margin: 10px 0;
    color: #1976d2;
`;

const UserTable = ({ name, aadhaarCard, epicNumber, imageSrc }: UserProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Full Name</th>
                    <th>Aadhaar Number</th>
                    <th>EPIC Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src={imageSrc} alt="User" width="100" height="100" />
                    </td>
                    <td>{name}</td>
                    <td>{aadhaarCard}</td>
                    <td>{epicNumber}</td>
                </tr>
            </tbody>
        </table>
    );
};

const ConstituencyTable = ({ state, district, constituency }: ConstituencyProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>State</th>
                    <th>District</th>
                    <th>Constituency</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{state}</td>
                    <td>{district}</td>
                    <td>{constituency}</td>
                </tr>
            </tbody>
        </table>
    );
};

const SlotsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;


const slots = [
    { id: 1, time: '8:00 AM - 9:00 AM', availability: 10, isSelected: false },
    { id: 2, time: '9:00 AM - 10:00 AM', availability: 35, isSelected: false },
    { id: 3, time: '10:00 AM - 11:00 AM', availability: 50, isSelected: false },
    { id: 4, time: '11:00 AM - 12:00 PM', availability: 65, isSelected: false },
    { id: 5, time: '12:00 PM - 1:00 PM', availability: 20, isSelected: false },
    { id: 6, time: '1:00 PM - 2:00 PM', availability: 5, isSelected: false },
    { id: 7, time: '2:00 PM - 3:00 PM', availability: 30, isSelected: false },
    { id: 8, time: '3:00 PM - 4:00 PM', availability: 40, isSelected: false },
    { id: 9, time: '4:00 PM - 5:00 PM', availability: 55, isSelected: false },
    { id: 10, time: '5:00 PM - 6:00 PM', availability: 70, isSelected: false },
    { id: 11, time: '6:00 PM - 7:00 PM', availability: 90, isSelected: false },
];


const SlotButton = styled.button<{ isSelected: boolean; availability: number }>`
  padding: 20px 10px;
  margin: 5px;
  border-radius: 5px;
  background-color: ${({ isSelected, availability }) => getBackgroundColor(isSelected, availability)};
  color: ${({ isSelected }) => isSelected ? '#fff' : '#000'};
  cursor: ${({ isSelected }) => isSelected ? 'default' : 'pointer'};
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ isSelected }) => isSelected ? '#008CBA' : '#d9d9d9'};
  }
`;

const getBackgroundColor = (isSelected: boolean, availability: number) => {
    if (isSelected) {
        return "#1976d2"; // Material-UI blue
    } else if (availability >= 75) {
        return green[500] + 40; // Material-UI green
    } else if (availability >= 50) {
        return orange[500] + 40; // Material-UI orange
    } else if (availability >= 25) {
        return red[500] + 40; // Material-UI red
    } else {
        return grey[500] + 40; // Material-UI grey
    }
};

const SlotsCard = () => {
    const navigate = useNavigate();
    const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

    const handleSlotClick = (id: number) => {
        setSelectedSlot(id);
    };
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleBtnClick = () => {
        if (selectedSlot) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
            }, 5000);

            setTimeout(() => {
                navigate("/slotbook/success");
            }, 7000);
        }
    }

    return (
        <div>
            <Typography variant="h6" color="primary" mb={3} sx={{ fontWeight: 700 }}>
                Select a time slot:
            </Typography>
            <SlotsWrapper>
                {slots.map((slot) => (
                    <SlotButton
                        key={slot.id}
                        isSelected={selectedSlot === slot.id}
                        availability={slot.availability}
                        onClick={() => handleSlotClick(slot.id)}
                        disabled={slot.isSelected}
                    >
                        {slot.time}
                        <br />
                        ({slot.availability} slots available)
                    </SlotButton>
                ))}
            </SlotsWrapper>
            <LoadingButton
                variant='outlined'
                sx={{ width: '100%', height: '50px', margin: '20px 0' }}
                loading={loading}
                onClick={handleBtnClick}
                disabled={success}
            >
                {success ? 'Booked' : 'Proceed to Book Slot'}
            </LoadingButton>
        </div>
    );
};

const UserDashboard = () => {

    const [activeChat, setActiveChat] = useState(false);

    const params = useParams();
    const id = params.id;

    const [user, setUser] = useState(
        {
            "userAvatar": "",
            "name": "",
            "aadhaar": "",
            "epic": "",
            "hasBookedSlot": false,
            "state": "",
            "district": "",
            "constituency": "",
            "slots": [{}],
            "uuid": ""
        }
    )

    useEffect(() => {
        const data = userData.data.filter((item) => item.uuid === id)
        setUser(data[0])
        console.log(user)
    }, [])

    return (
        <>
            {!activeChat ?
                <UserDashboardComponent>
                    <TableTitle>Profile Details</TableTitle>

                    <UserTable
                        name={user.name}
                        aadhaarCard={user.aadhaar}
                        epicNumber={user.epic}
                        imageSrc={user.userAvatar}
                    />
                    <TableWrapper>
                        <TableTitle>Constituency Details</TableTitle>
                        <ConstituencyTable
                            state={user.state}
                            district={user.district}
                            constituency={user.constituency}
                        />
                    </TableWrapper>
                    <br />
                    {user.hasBookedSlot ? "Your slot is booked" : <SlotsCard />}

                    <IconButton color="primary" aria-label="add to shopping cart" sx={{ position: "fixed", bottom: 0, right: 0, width: "70px", height: '70px', background: '#1976d230', margin: '0 20px 20px 0' }} onClick={() => setActiveChat(!activeChat)}>
                        <Chat />
                    </IconButton>

                </UserDashboardComponent>
                :
                <ChatbotComponent state={setActiveChat} />
            }

        </>
    );
};

export default UserDashboard;
