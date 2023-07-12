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
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModal";
import Modal from "react-modal";

import { theme } from "../../global/styles/theme";
import { formatDateRange } from "../../utils";

import { modalStyle, modalHeaderStyle } from "../../global/styles/modal";

import { BiCircle } from "react-icons/bi";
import { BsThreeDotsVertical, BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { createSchedule, updateSchedule } from "../../services/api";

const Schedule = ({ cleanCache, schedule }) => {
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [checkedCards, setCheckedCards] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    const [newScheduleName, setNewScheduleName] = useState(undefined);
    const [newScheduleDate, setNewScheduleDate] = useState(undefined);
    const [newScheduleHour, setNewScheduleHour] = useState(undefined);
    const [newGuest, setNewGuest] = useState(undefined);
    const [talkingPoints, setTalkingPoints] = useState(schedule.talkingPoints);

    const updateTalkingPoint = (index, value) => {
        const updatedTalkingPoints = [...talkingPoints];

        updatedTalkingPoints[index] = { description: value };

        setTalkingPoints(updatedTalkingPoints);
    };

    const addTalkingPoint = () => {
        const updatedTalkingPoints = [...talkingPoints, ""];
        setTalkingPoints(updatedTalkingPoints);
    };

    const handleCheckClick = (id) => {
        if (checkedCards.includes(id))
            setCheckedCards(checkedCards.filter((cardId) => cardId !== id));
        else setCheckedCards([...checkedCards, id]);
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

    const handleEditSchedule = (event, scheduleId) => {
        // console.log(newScheduleDate)
        // console.log(newScheduleHour)

        const data = {
            scheduleName: newScheduleName,
            // startDate: 1688774788149,
            // endDate: 1688774688149,
            guestEmail: newGuest,
            talkingPoints,
        };

        event.preventDefault();

        updateSchedule(data, scheduleId);
    };

    return (
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
                            color: theme.colors.babyBlue,
                            backgroundColor: theme.colors.white,
                            borderRadius: "100%",
                        }}
                        onClick={() => handleCheckClick(schedule.id)}
                    />
                ) : (
                    <BiCircle
                        size={25}
                        style={{
                            color: theme.colors.babyBlue,
                            borderRadius: "100%",
                        }}
                        onClick={() => handleCheckClick(schedule.id)}
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

            {modalIsOpen && selectedCardId === schedule.id && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={modalStyle}
                >
                    <Container className="modalHeader" style={modalHeaderStyle}>
                        Ações
                        <AiOutlineClose
                            size={25}
                            onClick={() => setModalIsOpen(false)}
                        />
                    </Container>

                    <Line
                        color={theme.colors.lightGray2}
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
                            color={theme.colors.black}
                            backgroundColor={theme.colors.white}
                            children="Editar conversa 1:1"
                            onClick={() => handleEditModal()}
                        />

                        <Line
                            color={theme.colors.lightGray2}
                            height="fit-content"
                            width="100%"
                        />

                        <Button
                            width="100%"
                            color={theme.colors.red}
                            backgroundColor={theme.colors.white}
                            children="Excluir conversa 1:1"
                            onClick={() => handleDeleteModal()}
                        />

                        <Line
                            color={theme.colors.lightGray2}
                            height="fit-content"
                            width="100%"
                        />
                    </Container>
                </Modal>
            )}

            {editModalIsOpen && selectedCardId && (
                <EditModal
                    isOpen={editModalIsOpen}
                    onClose={() => setEditModalIsOpen(false)}
                    schedule={schedule}
                    handleEditModal={handleEditModal}
                    handleEditSchedule={handleEditSchedule}
                    newScheduleName={newScheduleName}
                    setNewScheduleName={setNewScheduleName}
                    newScheduleDate={newScheduleDate}
                    setNewScheduleDate={setNewScheduleDate}
                    newScheduleHour={newScheduleHour}
                    setNewScheduleHour={setNewScheduleHour}
                    newGuest={newGuest}
                    setNewGuest={setNewGuest}
                    talkingPoints={talkingPoints}
                    updateTalkingPoint={updateTalkingPoint}
                    addTalkingPoint={addTalkingPoint}
                />
            )}

            {deleteModalIsOpen && selectedCardId && (
                <DeleteModal
                    isOpen={deleteModalIsOpen}
                    onClose={() => setDeleteModalIsOpen(false)}
                    schedule={schedule}
                    handleDeleteModal={handleDeleteModal}
                    // handleDeleteSchedule={handleDeleteSchedule}
                />
            )}
        </Card>
    );
};

export default Schedule;
