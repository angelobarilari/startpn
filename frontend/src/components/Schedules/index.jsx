import React, { useState } from "react";
import Container from "../../components/Container";
import Card from "../../components/Card/Index";
import Button from "../../components/Button";
import Line from "../../components/Line";
import Span from "../../components/Span";
import DetailsScheduleModal from "../DetailsScheduleModal";
import DeleteScheduleModal from "../DeleteScheduleModal";
import EditScheduleModal from "../EditScheduleModal";
import Modal from "react-modal";

import { theme } from "../../global/styles/theme";
import { formatDateRange } from "../../utils";

import { modalStyle, modalHeaderStyle } from "../../global/styles/modal";

import { BsThreeDotsVertical, BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";

const Schedule = ({ schedule }) => {
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [checkedCards, setCheckedCards] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [detailsScheduleModal, setDetailsScheduleModal] = useState(false);
    const [editScheduleModal, setEditScheduleModal] = useState(false);
    const [deleteScheduleModalIsOpen, setScheduleDeleteModalIsOpen] =
        useState(false);

    const handleCheckClick = (id) => {
        if (checkedCards.includes(id))
            setCheckedCards(checkedCards.filter((cardId) => cardId !== id));
        else setCheckedCards([...checkedCards, id]);
    };

    const handleDeleteModal = () => {
        setModalIsOpen(false);
        setScheduleDeleteModalIsOpen(true);
    };

    const handleEditModal = () => {
        setModalIsOpen(false);
        setEditScheduleModal(true);
    };

    return (
        <>
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
                        onClick={() => {
                            setSelectedCardId(schedule.id);
                            setDetailsScheduleModal(true);
                        }}
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

            {selectedCardId === schedule.id && (
                <>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={modalStyle}
                    >
                        <Container
                            className="modalHeader"
                            style={modalHeaderStyle}
                        >
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

                    <DetailsScheduleModal
                        isOpen={detailsScheduleModal}
                        onClose={() => setDetailsScheduleModal(false)}
                        schedule={schedule}
                    />

                    <EditScheduleModal
                        isOpen={editScheduleModal}
                        onClose={() => setEditScheduleModal(false)}
                        schedule={schedule}
                    />

                    <DeleteScheduleModal
                        isOpen={deleteScheduleModalIsOpen}
                        onClose={() => setScheduleDeleteModalIsOpen(false)}
                        schedule={schedule}
                    />
                </>
            )}
        </>
                
    );
};

export default Schedule;
