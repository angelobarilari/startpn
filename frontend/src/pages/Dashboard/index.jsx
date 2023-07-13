import React, { useState, useContext, useEffect, useRef } from "react";
import CreateScheduleModal from "../../components/CreateScheduleModal";
import Schedules from "../../components/Schedules";
import Container from "../../components/Container";
import Paragraph from "../../components/Paragraph";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Span from "../../components/Span";
import Input from "../../components/Input";

import { theme } from "../../global/styles/theme";
import { inputStyle } from "../../global/styles/input";

import addScheduleBtn from "../../images/svg/addScheduleBtn.svg";
import companyIcon from "../../images/svg/companyIcon.svg";
import logoutIcon from "../../images/svg/logoutIcon.svg";
import menuIcon from "../../images/svg/menuIcon.svg";
import profileIcon from "../../images/svg/profileIcon.svg";

import { useMediaQuery } from "react-responsive";

import { AiOutlineMessage } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { MdChecklist } from "react-icons/md";
import { PiGearSix } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

import { SchedulesContext } from "../../context/schedules";
import { UserContext } from "../../context/user";

const Dashboard = () => {
    const { pastSchedules, upcomingSchedules } = useContext(SchedulesContext);
    const { user } = useContext(UserContext);

    const [activeScheduleList, setActiveScheduleList] = useState("upcoming");
    const [sidebarVisibility, setSidebarVisibility] = useState(false);
    const [selectedButton, setSelectedButton] = useState(0);
    const [createScheduleModalIsOpen, setCreateScheduleModalIsOpen] =
        useState(false);

    const sidebarRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutsideSidebar);

        return () => {
            document.removeEventListener("click", handleClickOutsideSidebar);
        };
    }, []);

    const handleClickOutsideSidebar = (event) => {
        const menuIcon = document.querySelector(".menuIcon");

        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            setSidebarVisibility(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("@STARTPN-TOKEN");
        window.location.href = "/login";
    };

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <>
            {isDesktop ? (
                <>
                    <Container
                        width="100%"
                        height="100%"
                        display="flex"
                        justifyContent="flex-end"
                    >
                        <Container
                            width="100%"
                            paddingLeft="350px"
                            paddingRight="70px"
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            backgroundColor="#F7F9FB"
                        >
                            <Header
                                height="10%"
                                width="100%"
                                marginTop="35px"
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                color={theme.colors.babyBlue}
                                fontSize="30px"
                                fontStyle="normal"
                                fontWeight="600"
                                lineHeight="24.286px"
                                letterSpacing="0.101px"
                            >
                                Conversas 1:1
                                <Container
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    height="60px"
                                    width="250px"
                                    flexShrink="0"
                                    borderRadius="60px"
                                    padding="0px 20px 0px 4px"
                                    border={`1px solid ${theme.colors.lightGray}`}
                                    background={theme.colors.white}
                                >
                                    <RxAvatar
                                        size={55}
                                        style={{ marginRight: "10px" }}
                                    />

                                    <Span
                                        fontSize="18px"
                                        fontStyle="normal"
                                        fontWeight="400"
                                        lineHeight="normal"
                                        marginRight="20px"
                                        children={user.name}
                                        color={theme.colors.black}
                                    />

                                    <img src={profileIcon} />
                                </Container>
                            </Header>

                            <Container
                                height="10%"
                                width="100%"
                                minWidth="800px"
                                marginTop="35px"
                                display="flex"
                                flexShrink="0"
                                alignItems="center"
                                justifyContent="flex-start"
                                color={theme.colors.babyBlue}
                            >
                                <Container
                                    minWidth="30%"
                                    padding="3px"
                                    gap="10px"
                                    display="flex"
                                    flexShrink="0"
                                    justifyContent="space-between"
                                    borderRadius="100px"
                                    border={`1px solid ${theme.colors.lightGray}`}
                                >
                                    <Button
                                        width="100%"
                                        borderRadius="100px"
                                        children="1:1 agendadas"
                                        style={
                                            activeScheduleList === "upcoming"
                                                ? {
                                                    color: theme.colors.white,
                                                    backgroundColor:
                                                        theme.colors.babyBlue,
                                                }
                                                : {
                                                    color: theme.colors.babyBlue,
                                                    backgroundColor:
                                                        theme.colors.white,
                                                }
                                        }
                                        onClick={() =>
                                            setActiveScheduleList("upcoming")
                                        }
                                    />

                                    <Button
                                        width="100%"
                                        borderRadius="100px"
                                        children="1:1 realizadas"
                                        type="button"
                                        style={
                                            activeScheduleList === "past"
                                                ? {
                                                    color: theme.colors.white,
                                                    backgroundColor:
                                                        theme.colors.babyBlue,
                                                }
                                                : {
                                                    color: theme.colors.babyBlue,
                                                    backgroundColor:
                                                        theme.colors.white,
                                                }
                                        }
                                        onClick={() =>
                                            setActiveScheduleList("past")
                                        }
                                    />
                                </Container>

                                <Container
                                    width="100%"
                                    display="flex"
                                    justifyContent="space-between"
                                    paddingLeft="50px"
                                >
                                    <Input
                                        style={{
                                            ...inputStyle,
                                            width: "250px",
                                            borderRadius: "50px",
                                        }}
                                        type="text"
                                        name="scheduleName"
                                        placeholder="Pesquisar..."
                                        // onChange={(event) =>
                                        // setNewScheduleName(event.target.value)
                                        // }
                                        // value={newScheduleName}
                                    />
                                    <Button
                                        width="200px"
                                        color={theme.colors.white}
                                        backgroundColor={theme.colors.babyBlue}
                                        borderRadius="50px"
                                        fontSize="15px"
                                        fontStyle="normal"
                                        fontWeight="500"
                                        lineHeight="normal"
                                        children="Nova 1:1"
                                        onClick={() =>
                                            setCreateScheduleModalIsOpen(true)
                                        }
                                        type="button"
                                    />
                                </Container>
                            </Container>

                            <Container display="flex" width="100%" height="80%">
                                <Container
                                    className="cardsContainer"
                                    width="350px"
                                    height="530px"
                                    margin="5px 15px 10px 0px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="flex-start"
                                    flexDirection="column"
                                    flexShrink="0"
                                    overflowY="auto"
                                    overflowX="hidden"
                                >
                                    {activeScheduleList === "upcoming"
                                        ? upcomingSchedules.map((schedule) => (
                                            <Schedules schedule={schedule} />
                                        ))
                                        : pastSchedules.map((schedule) => (
                                            <Schedules schedule={schedule} />
                                        ))}
                                </Container>

                                <Container
                                    width="100%"
                                    margin="12.5px 0px 10px 15px"
                                    background="pink"
                                    padding="20px"
                                    borderRadius="10px"
                                    // border={`1px solid ${theme.colors.lightGray}`}
                                ></Container>
                            </Container>
                        </Container>
                    </Container>
                
                    <Sidebar
                            className="sidebar"
                            height="100%"
                            minWidth="15%"
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
                                        backgroundColor={
                                            selectedButton === 0
                                                ? theme.colors.lightGray3
                                                : theme.colors.white
                                        }
                                        color={
                                            selectedButton === 0
                                                ? theme.colors.babyBlue
                                                : theme.colors.darkGray2
                                        }
                                        onClick={() => setSelectedButton(0)}
                                        className={
                                            selectedButton === 0 ? "selected" : ""
                                        }
                                    >
                                        <BiUser
                                            size={25}
                                            style={{
                                                marginRight: "10px",
                                                color:
                                                    selectedButton === 0
                                                        ? theme.colors.babyBlue
                                                        : theme.colors.darkGray2,
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
                                        backgroundColor={
                                            selectedButton === 1
                                                ? theme.colors.lightGray3
                                                : theme.colors.white
                                        }
                                        color={
                                            selectedButton === 1
                                                ? theme.colors.babyBlue
                                                : theme.colors.darkGray2
                                        }
                                        onClick={() => setSelectedButton(1)}
                                        className={
                                            selectedButton === 1 ? "selected" : ""
                                        }
                                    >
                                        <MdChecklist
                                            size={25}
                                            style={{
                                                marginRight: "10px",
                                                color:
                                                    selectedButton === 1
                                                        ? theme.colors.babyBlue
                                                        : theme.colors.darkGray2,
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
                                        backgroundColor={
                                            selectedButton === 2
                                                ? theme.colors.lightGray3
                                                : theme.colors.white
                                        }
                                        color={
                                            selectedButton === 2
                                                ? theme.colors.babyBlue
                                                : theme.colors.darkGray2
                                        }
                                        onClick={() => setSelectedButton(2)}
                                        className={
                                            selectedButton === 2 ? "selected" : ""
                                        }
                                    >
                                        <AiOutlineMessage
                                            size={25}
                                            style={{
                                                marginRight: "10px",
                                                color:
                                                    selectedButton === 2
                                                        ? theme.colors.babyBlue
                                                        : theme.colors.darkGray2,
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
                                        backgroundColor={
                                            selectedButton === 3
                                                ? theme.colors.lightGray3
                                                : theme.colors.white
                                        }
                                        color={
                                            selectedButton === 3
                                                ? theme.colors.babyBlue
                                                : theme.colors.darkGray2
                                        }
                                        onClick={() => setSelectedButton(3)}
                                        className={
                                            selectedButton === 3 ? "selected" : ""
                                        }
                                    >
                                        <PiGearSix
                                            size={25}
                                            style={{
                                                marginRight: "10px",
                                                color:
                                                    selectedButton === 3
                                                        ? theme.colors.babyBlue
                                                        : theme.colors.darkGray2,
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
                </>
            ) : (
                <>
                    <Container
                        width="100%"
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        overflowY="auto"
                    >
                        <Header
                            width="100%"
                            minHeight="145px"
                            display="flex"
                            alignItems="center"
                            justifyContent="space-around"
                            textAlign="left"
                            borderRadius="0px 0px 10px 10px"
                            color={theme.colors.babyBlue}
                            backgroundColor={theme.colors.white}
                            borderBottom={`1px solid ${theme.colors.lightGray}`}
                            position="sticky"
                            top="0"
                        >
                            <img
                                src={menuIcon}
                                className="menuIcon"
                                alt="Menu Icon"
                                onClick={() =>
                                    setSidebarVisibility(!sidebarVisibility)
                                }
                            />
                            <img
                                src={companyIcon}
                                className="logo"
                                alt="Company icon"
                            />

                            <RxAvatar size={25} style={{ marginRight: "10px" }} />
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
                                                color: theme.colors.babyBlue,
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
                                        style={
                                            activeScheduleList === "upcoming"
                                                ? {
                                                    color: theme.colors.white,
                                                    backgroundColor:
                                                        theme.colors.babyBlue,
                                                }
                                                : {
                                                    color: theme.colors.babyBlue,
                                                    backgroundColor:
                                                        theme.colors.white,
                                                }
                                        }
                                        onClick={() =>
                                            setActiveScheduleList("upcoming")
                                        }
                                    />

                                    <Button
                                        width="50%"
                                        borderRadius="100px"
                                        children="1:1 realizadas"
                                        type="button"
                                        style={
                                            activeScheduleList === "past"
                                                ? {
                                                    color: theme.colors.white,
                                                    backgroundColor:
                                                        theme.colors.babyBlue,
                                                }
                                                : {
                                                    color: theme.colors.babyBlue,
                                                    backgroundColor:
                                                        theme.colors.white,
                                                }
                                        }
                                        onClick={() =>
                                            setActiveScheduleList("past")
                                        }
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
                                {activeScheduleList === "upcoming"
                                    ? upcomingSchedules.map((schedule) => (
                                        <Schedules schedule={schedule} />
                                    ))
                                    : pastSchedules.map((schedule) => (
                                        <Schedules schedule={schedule} />
                                    ))}
                            </Container>
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
                                ref={sidebarRef}
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
                                            backgroundColor={
                                                selectedButton === 0
                                                    ? theme.colors.lightGray3
                                                    : theme.colors.white
                                            }
                                            color={
                                                selectedButton === 0
                                                    ? theme.colors.babyBlue
                                                    : theme.colors.darkGray2
                                            }
                                            onClick={() => setSelectedButton(0)}
                                            className={
                                                selectedButton === 0
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
                                            <BiUser
                                                size={25}
                                                style={{
                                                    marginRight: "10px",
                                                    color:
                                                        selectedButton === 0
                                                            ? theme.colors.babyBlue
                                                            : theme.colors
                                                                .darkGray2,
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
                                            backgroundColor={
                                                selectedButton === 1
                                                    ? theme.colors.lightGray3
                                                    : theme.colors.white
                                            }
                                            color={
                                                selectedButton === 1
                                                    ? theme.colors.babyBlue
                                                    : theme.colors.darkGray2
                                            }
                                            onClick={() => setSelectedButton(1)}
                                            className={
                                                selectedButton === 1
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
                                            <MdChecklist
                                                size={25}
                                                style={{
                                                    marginRight: "10px",
                                                    color:
                                                        selectedButton === 1
                                                            ? theme.colors.babyBlue
                                                            : theme.colors
                                                                .darkGray2,
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
                                            backgroundColor={
                                                selectedButton === 2
                                                    ? theme.colors.lightGray3
                                                    : theme.colors.white
                                            }
                                            color={
                                                selectedButton === 2
                                                    ? theme.colors.babyBlue
                                                    : theme.colors.darkGray2
                                            }
                                            onClick={() => setSelectedButton(2)}
                                            className={
                                                selectedButton === 2
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
                                            <AiOutlineMessage
                                                size={25}
                                                style={{
                                                    marginRight: "10px",
                                                    color:
                                                        selectedButton === 2
                                                            ? theme.colors.babyBlue
                                                            : theme.colors
                                                                .darkGray2,
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
                                            backgroundColor={
                                                selectedButton === 3
                                                    ? theme.colors.lightGray3
                                                    : theme.colors.white
                                            }
                                            color={
                                                selectedButton === 3
                                                    ? theme.colors.babyBlue
                                                    : theme.colors.darkGray2
                                            }
                                            onClick={() => setSelectedButton(3)}
                                            className={
                                                selectedButton === 3
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
                                            <PiGearSix
                                                size={25}
                                                style={{
                                                    marginRight: "10px",
                                                    color:
                                                        selectedButton === 3
                                                            ? theme.colors.babyBlue
                                                            : theme.colors
                                                                .darkGray2,
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

                    <img
                        style={{
                            width: "60px",
                            height: "60px",
                            flexShrink: "0",
                            position: "fixed",
                            bottom: "5%",
                            right: "5%",
                            filter: "drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.50))",
                        }}
                        src={addScheduleBtn}
                        onClick={() => setCreateScheduleModalIsOpen(true)}
                    />
                </>
            )}

            {createScheduleModalIsOpen && (
                <CreateScheduleModal
                    isOpen={createScheduleModalIsOpen}
                    onClose={() => setCreateScheduleModalIsOpen(false)}
                />
            )}
        </>
    );
};

export default Dashboard;
