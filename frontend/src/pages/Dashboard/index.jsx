import React, { useState, useContext, useEffect } from "react";
import Container from "../../components/Container";
import Paragraph from "../../components/Paragraph";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card/Index";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Line from "../../components/Line";
import Span from "../../components/Span";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { theme } from "../../global/styles/theme";
import { getSchedules } from "../../services/api";
import { SchedulesContext } from "../../context/schedules";
import { formatDateRange } from "../../utils";

import { MdChecklist } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import { PiGearSix } from 'react-icons/pi';
import { BiUser } from "react-icons/bi"
import { RiSearch2Line } from "react-icons/ri"
import { BsThreeDotsVertical, BsCheckCircleFill } from "react-icons/bs"
import { BiCircle } from "react-icons/bi"

import companyIcon from "../../images/svg/companyIcon.svg";
import logoutIcon from "../../images/svg/logoutIcon.svg";
import menuIcon from "../../images/svg/menuIcon.svg";

const Dashboard = () => {
    const { schedules, setSchedules } = useContext(SchedulesContext);
    const [sidebarVisibility, setSidebarVisibility] = useState(false);
    const [selectedButton, setSelectedButton] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckClick = () => {
        setIsChecked(!isChecked);
    };

    const handleMenuButtonClick = (index) => {
        setSelectedButton(index);
    };

    const handleMenuIconClick = () => {
        setSidebarVisibility(!sidebarVisibility);
    };

    const handleLogout = () => {
        localStorage.removeItem("@STARTPN-TOKEN");
        window.location.href = "/login";
    };

    useEffect(() => {
        getSchedules()
            .then((res) => setSchedules(res.data.schedules))
            .catch((err) => console.log(err.response.data));
    }, [setSchedules]);

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <>
            {isDesktop ? (
                <Container
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="flex-start"
                >
                    <Header
                        textAlign="left"
                        height="10%"
                        width="100%"
                        color={theme.colors.babyBlue}
                    />

                    <Container>
                        <Sidebar
                            height="90%"
                            width="20%"
                            backgroundColor="green"
                        >
                            <Container>
                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Conversas 1:1"
                                />

                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Exemplo"
                                />

                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Exemplo"
                                />

                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Exemplo"
                                />
                            </Container>
                        </Sidebar>

                        <Container backgroundColor="aqua" width="80%">
                            dasdas
                        </Container>
                    </Container>
                </Container>
            ) : (
                <Container
                    width="100%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    overflowY="auto"
                >
                    <Header
                        display="flex"
                        alignItems="center"
                        justifyContent="space-around"
                        minHeight="145px"
                        width="100%"
                        textAlign="left"
                        borderRadius="0px 0px 10px 10px"
                        borderBottom={`1px solid ${theme.colors.lightGray}`}
                        color={theme.colors.babyBlue}
                    >
                        <img
                            src={menuIcon}
                            className="menuIcon"
                            alt="Menu Icon"
                            onClick={handleMenuIconClick}
                        />
                        <img
                            src={companyIcon}
                            className="logo"
                            alt="Company icon"
                        />
                        PHOTO
                    </Header>

                    <Container
                        display="flex"
                        flexDirection="column"
                        height="80%"
                        padding="0px 17px"
                    >
                        <Container
                            className="subHeaderContainer"
                            width="100%"
                            minHeight="20%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                            flexShrink="0"
                            borderRadius="25px"
                        >
                            <Container
                                width="100%"
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                color="black"
                            >
                                <Paragraph
                                    width="100%"
                                    fontWeight="500"
                                    fontSize="24px"
                                    lineHeight="36px"
                                    letter="3%"
                                    textAlign="left"
                                    color={theme.colors.babyBlue}
                                    children={"Conversas 1:1"}
                                />

                                <Container
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    width="45px"
                                    height="40px"
                                    borderRadius="10px"
                                    border={`1px solid ${theme.colors.lightGray}`}
                                >
                                    <RiSearch2Line 
                                        size={25}
                                        style={{
                                            color: theme.colors.babyBlue
                                        }}
                                    />
                                </Container>
                            </Container>

                            <Container
                                width="100%"
                                padding="3px"
                                gap="10px"
                                display="flex"
                                justifyContent="space-between"
                                borderRadius="100px"
                                border={`1px solid ${theme.colors.lightGray}`}
                            >
                                <Button
                                    width="50%"
                                    borderRadius="100px"
                                    children="1:1 agendadas"
                                    backgroundColor={theme.colors.babyBlue}
                                />

                                <Button
                                    width="50%"
                                    borderRadius="100px"
                                    children="1:1 realizadas"
                                    color={theme.colors.babyBlue}
                                    backgroundColor={theme.colors.white}
                                />
                            </Container>
                        </Container>

                        <Container
                            className="cardsContainer"
                            width="100%"
                            height="fit-content"
                            marginTop="5px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                            flexShrink="0"
                        >
                            {schedules.map((schedule) => (
                                <Card
                                    key={schedule.id}
                                    width="100%"
                                    height="180px"
                                    gap="10px"
                                    padding="20px"
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="flex-start"
                                    marginTop="15px"
                                    borderRadius="10px"
                                    color="black"
                                    border={`1px solid ${theme.colors.lightGray}`}
                                >
                                    <Container
                                        className="cardHeader"
                                        width="100%"
                                        height="30%"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        
                                        {isChecked ? (
                                            <BsCheckCircleFill
                                                size={25}
                                                style={{
                                                    color: theme.colors.babyBlue,
                                                    backgroundColor: theme.colors.white,
                                                    borderRadius: '100%',
                                                }}
                                                onClick={handleCheckClick}
                                            />
                                        ) : (
                                            <BiCircle 
                                                size={25}
                                                style={{
                                                    color: theme.colors.babyBlue,
                                                    // backgroundColor: theme.colors.white,
                                                    borderRadius: '100%',
                                                }}
                                                onClick={handleCheckClick}
                                            />
                                        )}

                                        <Container
                                            className="scheduleInfos"
                                            height="100%"
                                            width="80%"
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                            flexShrink="0"
                                            gap="10px"
                                        >
                                            <Span
                                                textAlign="left"
                                                fontSize="14px"
                                                fontStyle="normal"
                                                fontWeight="500"
                                                lineHeight="normal"
                                                display="flex"
                                                flexShrink="0"
                                                color={theme.colors.black}
                                                children={schedule.scheduleName}
                                            />

                                            <Span
                                                textAlign="left"
                                                fontSize="12px"
                                                fontStyle="normal"
                                                fontWeight="500"
                                                lineHeight="14px"
                                                letterSpacing="0.75px"
                                                display="flex"
                                                flexShrink="0"
                                                color={theme.colors.babyBlue}
                                                children={formatDateRange(
                                                    schedule.startDate,
                                                    schedule.endDate
                                                )}
                                            />
                                        </Container>
                                        <BsThreeDotsVertical size={25}/>
                                    </Container>

                                    <Line
                                        color={theme.colors.lightGray2}
                                        height="fit-content"
                                        width="100%"
                                    />

                                    <Container
                                        className="cardBody"
                                        width="100%"
                                        height="70%"
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        flexDirection="column"
                                        gap="15px"
                                    >
                                        <Container
                                            className="ownerContainer"
                                            width="100%"
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            fontSize="14px"
                                            fontStyle="normal"
                                            fontWeight="500"
                                            lineHeight="19px"
                                            color={theme.colors.darkGray}
                                        >
                                            Organizador
                                            <Span
                                                width="50%"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="flex-end"
                                                lineHeight="normal"
                                                color={theme.colors.black}
                                            >
                                                <img
                                                    src="my img"
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                {schedule.owner.name}
                                            </Span>
                                        </Container>

                                        <Container
                                            className="guestContainer"
                                            width="100%"
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            fontSize="14px"
                                            fontStyle="normal"
                                            fontWeight="500"
                                            lineHeight="19px"
                                            color={theme.colors.darkGray}
                                        >
                                            Convidado
                                            <Span
                                                width="50%"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="flex-end"
                                                color={theme.colors.black}
                                                lineHeight="normal"
                                            >
                                                <img
                                                    src="my img"
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                {schedule.guest.name}
                                            </Span>
                                        </Container>
                                    </Container>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    {sidebarVisibility && (
                        <Sidebar
                            className="sidebar"
                            height="100%"
                            width="75%"
                            padding="16px"
                            position="absolute"
                            top="0px"
                            left="0px"
                            borderRadius=" 0px 17px 17px 0px"
                            borderRight={`1px solid ${theme.colors.lightGray}`}
                            boxShadow="24px 0px 200px 0px rgba(0, 0, 0, 0.40)"
                            backgroundColor={theme.colors.white}
                        >
                            <Header
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                height="10%"
                                width="100%"
                                color={theme.colors.babyBlue}
                            >
                                <img
                                    src={companyIcon}
                                    className="logo"
                                    alt="Company icon"
                                    width="50%"
                                />
                            </Header>

                            <Container
                                height="70%"
                                width="100%"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Container
                                    width="100%"
                                    className="btnsContainer"
                                    display="inline-flex"
                                    flexDirection="column"
                                    alignItems="flex-start"
                                    gap="21px"
                                >
                                    <Button
                                        width="100%"
                                        display="flex"
                                        alignItems="center"
                                        paddingLeft="11px"
                                        flexShrink="0"
                                        fontSize="15px"
                                        fontStyle="normal"
                                        fontWeight="500"
                                        lineHeight="normal"
                                        backgroundColor={theme.colors.white}
                                        color={selectedButton === 0 ? theme.colors.babyBlue : theme.colors.darkGray2}
                                        onClick={() => handleMenuButtonClick(0)}
                                        className={selectedButton === 0 ? 'selected' : ''}
                                    >
                                        <BiUser 
                                            size={25}
                                            style={{
                                                marginRight: "10px",
                                                color: selectedButton === 0 ? theme.colors.babyBlue : theme.colors.darkGray2,
                                            }}
                                        />
                                        Conversas 1:1
                                    </Button>

                                    <Button
                                        width="100%"
                                        display="flex"
                                        alignItems="center"
                                        paddingLeft="11px"
                                        flexShrink="0"
                                        fontSize="15px"
                                        fontStyle="normal"
                                        fontWeight="500"
                                        lineHeight="normal"
                                        backgroundColor={theme.colors.white}
                                        color={selectedButton === 1 ? theme.colors.babyBlue : theme.colors.darkGray2}
                                        onClick={() => handleMenuButtonClick(1)}
                                        className={selectedButton === 1 ? 'selected' : ''}
                                    >
                                        <MdChecklist 
                                            size={25}
                                            style={{
                                                marginRight: "10px",
                                                color: selectedButton === 1 ? theme.colors.babyBlue : theme.colors.darkGray2,
                                            }}
                                        />
                                        Exemplo
                                    </Button>
                                    <Button
                                        width="100%"
                                        display="flex"
                                        alignItems="center"
                                        paddingLeft="11px"
                                        flexShrink="0"
                                        fontSize="15px"
                                        fontStyle="normal"
                                        fontWeight="500"
                                        lineHeight="normal"
                                        backgroundColor={theme.colors.white}
                                        color={selectedButton === 2 ? theme.colors.babyBlue : theme.colors.darkGray2}
                                        onClick={() => handleMenuButtonClick(2)}
                                        className={selectedButton === 2 ? 'selected' : ''}
                                    >
                                        <AiOutlineMessage 
                                            size={25}
                                            style={{
                                                marginRight: "10px",
                                                color: selectedButton === 2 ? theme.colors.babyBlue : theme.colors.darkGray2,
                                            }}
                                        />
                                        Exemplo
                                    </Button>
                                    <Button
                                        width="100%"
                                        display="flex"
                                        alignItems="center"
                                        paddingLeft="11px"
                                        flexShrink="0"
                                        fontSize="15px"
                                        fontStyle="normal"
                                        fontWeight="500"
                                        lineHeight="normal"
                                        backgroundColor={theme.colors.white}
                                        color={selectedButton === 3 ? theme.colors.babyBlue : theme.colors.darkGray2}
                                        onClick={() => handleMenuButtonClick(3)}
                                        className={selectedButton === 3 ? 'selected' : ''}
                                    >
                                        <PiGearSix
                                            size={25}
                                            style={{
                                                marginRight: "10px",
                                                color: selectedButton === 3 ? theme.colors.babyBlue : theme.colors.darkGray2,
                                            }}
                                        />
                                        Exemplo
                                    </Button>
                                </Container>

                                <Button
                                    width="100%"
                                    display="flex"
                                    alignItems="center"
                                    paddingLeft="11px"
                                    flexShrink="0"
                                    fontSize="15px"
                                    fontStyle="normal"
                                    fontWeight="500"
                                    lineHeight="normal"
                                    color={theme.colors.darkGray2}
                                    backgroundColor={theme.colors.white}
                                    onClick={handleLogout}
                                >
                                    <img
                                        src={logoutIcon}
                                        style={{
                                            marginRight: "10px",
                                        }}
                                    />
                                    Sair
                                </Button>
                            </Container>
                        </Sidebar>
                    )}
                </Container>
            )}
        </>
    );
};

export default Dashboard;
