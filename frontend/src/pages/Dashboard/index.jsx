import React, { useState, useContext, useEffect, useRef } from "react";
import Container from "../../components/Container";
import Paragraph from "../../components/Paragraph";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card/Index";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Select from "../../components/Select";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Line from "../../components/Line";
import Span from "../../components/Span";

import { theme } from "../../global/styles/theme";
import { getSchedules, getUsers } from "../../services/api";
import { SchedulesContext } from "../../context/schedules";
import { modalStyle, modalHeaderStyle } from "../../global/styles/modal";
import { inputStyle } from "../../global/styles/input";
import { labelStyle } from "../../global/styles/label";
import { formatDateRange } from "../../utils";

import companyIcon from "../../images/svg/companyIcon.svg";
import logoutIcon from "../../images/svg/logoutIcon.svg";
import menuIcon from "../../images/svg/menuIcon.svg";
import addScheduleBtn from "../../images/svg/addScheduleBtn.svg";

import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import { BsThreeDotsVertical, BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { MdChecklist } from "react-icons/md";
import { PiGearSix } from "react-icons/pi";
import { BiCircle } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import Modal from "react-modal";

import "./style.css";

const Dashboard = () => {
    const { schedules, setSchedules } = useContext(SchedulesContext);
    const [users, setUsers] = useState([]);
    const [sidebarVisibility, setSidebarVisibility] = useState(false);
    const [selectedButton, setSelectedButton] = useState(0);
    const [checkedCards, setCheckedCards] = useState([]);
    const sidebarRef = useRef(null);

    const [selectedCardId, setSelectedCardId] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [createScheduleModalIsOpen, setCreateScheduleModalIsOpen] =
        useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    const [newScheduleName, setNewScheduleName] = useState(undefined);
    const [newScheduleDate, setNewScheduleDate] = useState(undefined);
    const [newScheduleHour, setNewScheduleHour] = useState(undefined);
    const [newGuest, setNewGuest] = useState(undefined);

    const [talkingPoints, setTalkingPoints] = useState([]);
    const [newTalkingPoints, setNewTalkingPoints] = useState([]);

    const addNewTalkingPoints = () => {
        setNewTalkingPoints([...newTalkingPoints, ""]);
    };

    const updateTalkingPoint = (index, value) => {
        const updatedTalkingPoints = [...talkingPoints];
        updatedTalkingPoints[index] = { description: value };
        setTalkingPoints(updatedTalkingPoints);
    };

    const cleanCache = () => {
        setNewScheduleName(undefined);
        setNewScheduleDate(undefined);
        setNewScheduleHour(undefined);
        setNewGuest(undefined);
        setNewTalkingPoints([]);
    };

    const handleCloseCreateScheduleModal = () => {
        setCreateScheduleModalIsOpen(false);
        cleanCache();
    };

    const handleDeleteModal = () => {
        setModalIsOpen(false);
        setDeleteModalIsOpen(true);
    };

    const handleEditModal = () => {
        setModalIsOpen(false);
        setEditModalIsOpen(true);
        cleanCache();
    };

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

    const handleCheckClick = (id) => {
        if (checkedCards.includes(id))
            setCheckedCards(checkedCards.filter((cardId) => cardId !== id));
        else setCheckedCards([...checkedCards, id]);
    };

    const handleLogout = () => {
        localStorage.removeItem("@STARTPN-TOKEN");
        window.location.href = "/login";
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutsideSidebar);

        return () => {
            document.removeEventListener("click", handleClickOutsideSidebar);
        };
    }, []);

    useEffect(() => {
        getSchedules()
            .then((res) => setSchedules(res.data.schedules))
            .catch((err) => console.log(err.response.data));
    }, [setSchedules]);

    useEffect(() => {
        getUsers()
            .then((res) => setUsers(res.data.users))
            .catch((err) => console.log(err.response.data));
    }, [setUsers]);

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
                        p
                    />

                    <Container>
                        <Sidebar
                            height="100%"
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
                                    margin="7.5px"
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
                                        {checkedCards.includes(schedule.id) ? (
                                            <BsCheckCircleFill
                                                size={25}
                                                style={{
                                                    color: theme.colors
                                                        .babyBlue,
                                                    backgroundColor:
                                                        theme.colors.white,
                                                    borderRadius: "100%",
                                                }}
                                                onClick={() =>
                                                    handleCheckClick(
                                                        schedule.id
                                                    )
                                                }
                                            />
                                        ) : (
                                            <BiCircle
                                                size={25}
                                                style={{
                                                    color: theme.colors
                                                        .babyBlue,
                                                    borderRadius: "100%",
                                                }}
                                                onClick={() =>
                                                    handleCheckClick(
                                                        schedule.id
                                                    )
                                                }
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
                                        <BsThreeDotsVertical
                                            size={25}
                                            onClick={() => {
                                                setSelectedCardId(schedule.id);
                                                setModalIsOpen(true);
                                            }}
                                        />

                                        {modalIsOpen &&
                                            selectedCardId === schedule.id && (
                                                <Modal
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={() =>
                                                        setModalIsOpen(false)
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <Container
                                                        className="modalHeader"
                                                        style={modalHeaderStyle}
                                                    >
                                                        Ações
                                                        <AiOutlineClose
                                                            size={25}
                                                            onClick={() =>
                                                                setModalIsOpen(
                                                                    false
                                                                )
                                                            }
                                                        />
                                                    </Container>

                                                    <Line
                                                        color={
                                                            theme.colors
                                                                .lightGray2
                                                        }
                                                        height="fit-content"
                                                        width="100%"
                                                    />

                                                    <Container
                                                        display="flex"
                                                        flexDirection="column"
                                                        alignItems="flex-start"
                                                        height="50%"
                                                    >
                                                        <Button
                                                            width="100%"
                                                            color={
                                                                theme.colors
                                                                    .black
                                                            }
                                                            backgroundColor={
                                                                theme.colors
                                                                    .white
                                                            }
                                                            children="Editar conversa 1:1"
                                                            onClick={() =>
                                                                handleEditModal()
                                                            }
                                                        />

                                                        <Line
                                                            color={
                                                                theme.colors
                                                                    .lightGray2
                                                            }
                                                            height="fit-content"
                                                            width="100%"
                                                        />

                                                        <Button
                                                            width="100%"
                                                            color={
                                                                theme.colors.red
                                                            }
                                                            backgroundColor={
                                                                theme.colors
                                                                    .white
                                                            }
                                                            children="Excluir conversa 1:1"
                                                            onClick={() =>
                                                                handleDeleteModal()
                                                            }
                                                        />

                                                        <Line
                                                            color={
                                                                theme.colors
                                                                    .lightGray2
                                                            }
                                                            height="fit-content"
                                                            width="100%"
                                                        />
                                                    </Container>
                                                </Modal>
                                            )}

                                        {deleteModalIsOpen &&
                                            selectedCardId === schedule.id && (
                                                <Modal
                                                    style={modalStyle}
                                                    isOpen={deleteModalIsOpen}
                                                    onRequestClose={() =>
                                                        setDeleteModalIsOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    <Container
                                                        className="deleteModalHeader"
                                                        style={modalHeaderStyle}
                                                    >
                                                        <AiOutlineClose
                                                            size={25}
                                                            onClick={() =>
                                                                setDeleteModalIsOpen(
                                                                    false
                                                                )
                                                            }
                                                        />
                                                        Excluir conversa 1:1
                                                        <Button
                                                            color={
                                                                theme.colors.red
                                                            }
                                                            backgroundColor={
                                                                theme.colors
                                                                    .lightRed
                                                            }
                                                            borderRadius="50px"
                                                            fontSize="15px"
                                                            fontStyle="normal"
                                                            fontWeight="500"
                                                            lineHeight="normal"
                                                            children="Excluir"
                                                        />
                                                    </Container>

                                                    <Line
                                                        color={
                                                            theme.colors
                                                                .lightGray2
                                                        }
                                                        height="fit-content"
                                                        width="100%"
                                                    />

                                                    <Container
                                                        display="flex"
                                                        justifyContent="center"
                                                        flexDirection="column"
                                                        alignItems="center"
                                                        height="50%"
                                                        color={
                                                            theme.colors.black
                                                        }
                                                        textAlign="center"
                                                        flexShrink="0"
                                                        fontSize="18px"
                                                        fontStyle="normal"
                                                        lineHeight="28px"
                                                    >
                                                        Tem certeza que deseja
                                                        excluir
                                                        <Span fontWeight="600">
                                                            {
                                                                schedule.scheduleName
                                                            }
                                                            ?
                                                        </Span>
                                                    </Container>
                                                </Modal>
                                            )}

                                        {editModalIsOpen &&
                                            selectedCardId === schedule.id && (
                                                <Modal
                                                    style={{
                                                        content: {
                                                            ...modalStyle.content,
                                                            height: "100%",
                                                            borderRadius:
                                                                "none",
                                                        },
                                                    }}
                                                    isOpen={editModalIsOpen}
                                                    onRequestClose={() =>
                                                        handleEditModal()
                                                    }
                                                >
                                                    <Container
                                                        className="editModalHeader"
                                                        style={{
                                                            ...modalHeaderStyle,
                                                            height: "5%",
                                                        }}
                                                        textAlign="left"
                                                    >
                                                        <AiOutlineClose
                                                            size={25}
                                                            onClick={() =>
                                                                setEditModalIsOpen(
                                                                    false
                                                                )
                                                            }
                                                        />
                                                        Editar conversa 1:1
                                                        <Button
                                                            color={
                                                                theme.colors
                                                                    .white
                                                            }
                                                            backgroundColor={
                                                                theme.colors
                                                                    .babyBlue
                                                            }
                                                            borderRadius="50px"
                                                            fontSize="15px"
                                                            fontStyle="normal"
                                                            fontWeight="500"
                                                            lineHeight="normal"
                                                            children="Editar"
                                                        />
                                                    </Container>

                                                    <Line
                                                        color={
                                                            theme.colors
                                                                .lightGray2
                                                        }
                                                        height="fit-content"
                                                        width="100%"
                                                    />

                                                    <Container
                                                        className="editModalBody"
                                                        width="100%"
                                                        display="flex"
                                                        flexDirection="column"
                                                        alignItems="flex-start"
                                                        gap="20px"
                                                    >
                                                        <Label
                                                            style={labelStyle}
                                                            htmlFor="scheduleName"
                                                            children={
                                                                "Nome da 1:1"
                                                            }
                                                        />
                                                        <Input
                                                            style={inputStyle}
                                                            type="text"
                                                            name="scheduleName"
                                                            onChange={(event) =>
                                                                setNewScheduleName(
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                newScheduleName !==
                                                                undefined
                                                                    ? newScheduleName
                                                                    : schedule.scheduleName
                                                            }
                                                        />

                                                        <Container
                                                            width="100%"
                                                            display="flex"
                                                            justifyContent="space-between"
                                                        >
                                                            <Container
                                                                display="flex"
                                                                flexDirection="column"
                                                                justifyContent="stretch"
                                                                width="45%"
                                                                flexShrink="0"
                                                            >
                                                                <Label
                                                                    style={
                                                                        labelStyle
                                                                    }
                                                                    htmlFor="scheduleDate"
                                                                    children={
                                                                        "Data da 1:1"
                                                                    }
                                                                />
                                                                <Input
                                                                    style={{
                                                                        ...inputStyle,
                                                                    }}
                                                                    type="date"
                                                                    name="scheduleDate"
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setNewScheduleDate(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    // ponto de atenção
                                                                    value={
                                                                        newScheduleDate !==
                                                                        undefined
                                                                            ? newScheduleDate
                                                                            : schedule.scheduleStartDate
                                                                    }
                                                                />
                                                            </Container>

                                                            <Container
                                                                display="flex"
                                                                flexDirection="column"
                                                                justifyContent="stretch"
                                                                width="45%"
                                                                flexShrink="0"
                                                            >
                                                                <Label
                                                                    style={
                                                                        labelStyle
                                                                    }
                                                                    htmlFor="scheduleHour"
                                                                    children={
                                                                        "Horário da 1:1"
                                                                    }
                                                                />
                                                                <Input
                                                                    style={{
                                                                        ...inputStyle,
                                                                        minWidth:
                                                                            "50%",
                                                                    }}
                                                                    type="time"
                                                                    name="scheduleHour"
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setNewScheduleHour(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    // ponto de atenção
                                                                    value={
                                                                        newScheduleHour !==
                                                                        undefined
                                                                            ? newScheduleHour
                                                                            : schedule.scheduleStartDate
                                                                    }
                                                                />
                                                            </Container>
                                                        </Container>

                                                        <Label
                                                            style={labelStyle}
                                                            htmlFor="guest"
                                                            children={
                                                                "Convidado"
                                                            }
                                                        />

                                                        <Select
                                                            style={inputStyle}
                                                            name="guest"
                                                            onChange={(event) =>
                                                                setNewGuest(
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                            value={newGuest}
                                                        >
                                                            {users
                                                                .filter(
                                                                    (user) =>
                                                                        user.name !==
                                                                        schedule
                                                                            .owner
                                                                            .name
                                                                )
                                                                .map((user) => (
                                                                    <option
                                                                        key={
                                                                            user.id
                                                                        }
                                                                        value={
                                                                            user.name
                                                                        }
                                                                        defaultValue={
                                                                            user.name ===
                                                                            schedule
                                                                                .guest
                                                                                .name
                                                                        }
                                                                    >
                                                                        {
                                                                            user.name
                                                                        }
                                                                    </option>
                                                                ))}
                                                        </Select>

                                                        <Span
                                                            fontSize="18px"
                                                            fontStyle="normal"
                                                            fontWeight="500"
                                                            lineHeight="normal"
                                                            color={
                                                                theme.colors
                                                                    .black
                                                            }
                                                        >
                                                            Talking points do
                                                            1:1
                                                        </Span>

                                                        {schedule.talkingPoints.map(
                                                            (
                                                                talkingPoint,
                                                                index
                                                            ) => (
                                                                <Container
                                                                    className="talkingPoint"
                                                                    width="100%"
                                                                    height="fit-content"
                                                                    display="flex"
                                                                    alignItems="center"
                                                                    justifyContent="space-between"
                                                                    flexDirection="column"
                                                                >
                                                                    <Container
                                                                        minWidth="100%%"
                                                                        paddingBottom="20px"
                                                                        display="flex"
                                                                        alignItems="center"
                                                                        justifyContent="space-between"
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                color: "black",
                                                                            }}
                                                                        >
                                                                            ICON
                                                                        </div>

                                                                        <Container width="80%">
                                                                            <Label
                                                                                style={
                                                                                    labelStyle
                                                                                }
                                                                                htmlFor={`scheduleTopic_${index}`}
                                                                                children={
                                                                                    "Nome do talking point"
                                                                                }
                                                                            />

                                                                            <Input
                                                                                style={
                                                                                    inputStyle
                                                                                }
                                                                                type="text"
                                                                                name={`scheduleTopic_${index}`}
                                                                                onChange={(
                                                                                    event
                                                                                ) =>
                                                                                    updateTalkingPoint(
                                                                                        index,
                                                                                        event
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                value={
                                                                                    talkingPoints[
                                                                                        index
                                                                                    ] !==
                                                                                    undefined
                                                                                        ? talkingPoints[
                                                                                              index
                                                                                          ]
                                                                                        : talkingPoint.description !==
                                                                                          undefined
                                                                                        ? talkingPoint.description
                                                                                        : talkingPoint
                                                                                }
                                                                            />
                                                                        </Container>
                                                                    </Container>

                                                                    <Line
                                                                        color={
                                                                            theme
                                                                                .colors
                                                                                .lightGray2
                                                                        }
                                                                        height="fit-content"
                                                                        width="100%"
                                                                    />
                                                                </Container>
                                                            )
                                                        )}

                                                        {newTalkingPoints.map(
                                                            (
                                                                newTalkingPoint,
                                                                index
                                                            ) => (
                                                                <Container
                                                                    className="talkingPoint"
                                                                    width="100%"
                                                                    height="fit-content"
                                                                    display="flex"
                                                                    alignItems="center"
                                                                    justifyContent="space-between"
                                                                    flexDirection="column"
                                                                    key={index}
                                                                >
                                                                    <Container
                                                                        minWidth="100%%"
                                                                        paddingBottom="20px"
                                                                        display="flex"
                                                                        alignItems="center"
                                                                        justifyContent="space-between"
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                color: "black",
                                                                            }}
                                                                        >
                                                                            ICON
                                                                        </div>

                                                                        <Container width="80%">
                                                                            <Label
                                                                                style={
                                                                                    labelStyle
                                                                                }
                                                                                htmlFor={`scheduleTopic_${index}`}
                                                                                children={
                                                                                    "Nome do talking point"
                                                                                }
                                                                            />

                                                                            <Input
                                                                                style={
                                                                                    inputStyle
                                                                                }
                                                                                placeholder="Insira um nome"
                                                                                type="text"
                                                                                name={`scheduleTopic_${index}`}
                                                                            />
                                                                        </Container>
                                                                    </Container>

                                                                    <Line
                                                                        color={
                                                                            theme
                                                                                .colors
                                                                                .lightGray2
                                                                        }
                                                                        height="fit-content"
                                                                        width="100%"
                                                                    />
                                                                </Container>
                                                            )
                                                        )}

                                                        <Button
                                                            fontSize="16px"
                                                            fontStyle="normal"
                                                            fontWeight="500"
                                                            lineHeight="165%"
                                                            letterSpacing="0.08px"
                                                            color={
                                                                theme.colors
                                                                    .babyBlue
                                                            }
                                                            backgroundColor={
                                                                theme.colors
                                                                    .white
                                                            }
                                                            children={
                                                                "+ Adicionar novo ponto"
                                                            }
                                                            onClick={
                                                                addNewTalkingPoints
                                                            }
                                                        />
                                                    </Container>
                                                </Modal>
                                            )}
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

                    <Modal
                        style={{
                            content: {
                                ...modalStyle.content,
                                height: "100%",
                                borderRadius: "none",
                            },
                        }}
                        isOpen={createScheduleModalIsOpen}
                        onRequestClose={() =>
                            setCreateScheduleModalIsOpen(false)
                        }
                    >
                        <Container
                            className="createScheduleModalHeader"
                            style={{
                                ...modalHeaderStyle,
                                height: "5%",
                            }}
                            textAlign="left"
                        >
                            <AiOutlineClose
                                size={25}
                                onClick={() => handleCloseCreateScheduleModal()}
                            />
                            Nova conversa 1:1
                            <Button
                                color={theme.colors.white}
                                backgroundColor={theme.colors.babyBlue}
                                borderRadius="50px"
                                fontSize="15px"
                                fontStyle="normal"
                                fontWeight="500"
                                lineHeight="normal"
                                children="Criar"
                            />
                        </Container>

                        <Line
                            color={theme.colors.lightGray2}
                            height="fit-content"
                            width="100%"
                        />

                        <Container
                            className="editModalBody"
                            width="100%"
                            display="flex"
                            flexDirection="column"
                            alignItems="flex-start"
                            gap="20px"
                        >
                            <Label
                                style={labelStyle}
                                htmlFor="scheduleName"
                                children={"Nome da 1:1"}
                            />
                            <Input
                                style={inputStyle}
                                type="text"
                                name="scheduleName"
                                placeholder="Insira o nome da 1:1"
                                onChange={(event) =>
                                    setNewScheduleName(event.target.value)
                                }
                                value={newScheduleName}
                            />

                            <Container
                                width="100%"
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Container
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="stretch"
                                    width="45%"
                                    flexShrink="0"
                                >
                                    <Label
                                        style={labelStyle}
                                        htmlFor="scheduleDate"
                                        children={"Data da 1:1"}
                                    />
                                    <Input
                                        style={{
                                            ...inputStyle,
                                        }}
                                        type="date"
                                        name="scheduleDate"
                                        onChange={(event) =>
                                            setNewScheduleDate(
                                                event.target.value
                                            )
                                        }
                                        value={newScheduleDate}
                                    />
                                </Container>

                                <Container
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="stretch"
                                    width="45%"
                                    flexShrink="0"
                                >
                                    <Label
                                        style={labelStyle}
                                        htmlFor="scheduleHour"
                                        children={"Horário da 1:1"}
                                    />
                                    <Input
                                        style={{
                                            ...inputStyle,
                                            minWidth: "50%",
                                        }}
                                        type="time"
                                        name="scheduleHour"
                                        onChange={(event) =>
                                            setNewScheduleHour(
                                                event.target.value
                                            )
                                        }
                                        value={newScheduleHour}
                                    />
                                </Container>
                            </Container>

                            <Label
                                style={labelStyle}
                                htmlFor="guest"
                                children={"Convidado"}
                            />

                            <Select
                                style={inputStyle}
                                name="guest"
                                onChange={(event) =>
                                    setNewGuest(event.target.value)
                                }
                                value={newGuest}
                            >
                                <option value="">Selecione</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.name}>
                                        {user.name}
                                    </option>
                                ))}
                            </Select>

                            <Span
                                fontSize="18px"
                                fontStyle="normal"
                                fontWeight="500"
                                lineHeight="normal"
                                color={theme.colors.black}
                            >
                                Talking points do 1:1
                            </Span>

                            {newTalkingPoints.map((talkingPoint, index) => (
                                <Container
                                    className="talkingPoint"
                                    width="100%"
                                    height="fit-content"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    flexDirection="column"
                                >
                                    <Container
                                        minWidth="100%%"
                                        paddingBottom="20px"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <div style={{ color: "black" }}>
                                            ICON
                                        </div>

                                        <Container width="80%">
                                            <Label
                                                style={labelStyle}
                                                htmlFor={`scheduleTopic_${index}`}
                                                children={
                                                    "Nome do talking point"
                                                }
                                            />

                                            <Input
                                                style={inputStyle}
                                                placeholder="Insira um nome"
                                                type="text"
                                                name={`scheduleTopic_${index}`}
                                                onChange={(event) =>
                                                    updateTalkingPoint(
                                                        index,
                                                        event.target.value
                                                    )
                                                }
                                                value={talkingPoint.description}
                                            />
                                        </Container>
                                    </Container>

                                    <Line
                                        color={theme.colors.lightGray2}
                                        height="fit-content"
                                        width="100%"
                                    />
                                </Container>
                            ))}

                            <Button
                                fontSize="16px"
                                fontStyle="normal"
                                fontWeight="500"
                                lineHeight="165%"
                                letterSpacing="0.08px"
                                color={theme.colors.babyBlue}
                                backgroundColor={theme.colors.white}
                                children={"+ Adicionar novo ponto"}
                                onClick={addNewTalkingPoints}
                            />
                        </Container>
                    </Modal>
                </Container>
            )}
        </>
    );
};

export default Dashboard;
