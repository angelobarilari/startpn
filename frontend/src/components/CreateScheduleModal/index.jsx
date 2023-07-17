import React, { useState, useContext } from "react";
import Modal from "react-modal";
import Container from "../Container";
import Button from "../Button";
import Select from "../Select";
import Label from "../Label";
import Input from "../Input";
import Line from "../Line";
import Span from "../Span";
import Form from "../Form";

import { theme } from "../../global/styles/theme";
import { convertToTimeStamp } from "../../utils";
import { createSchedule } from "../../services/api";

import {
    modalMobileStyle,
    modalDesktopStyle,
    modalHeaderStyle,
} from "../../global/styles/modal";
import { inputStyle } from "../../global/styles/input";
import { labelStyle } from "../../global/styles/label";

import { AiOutlineClose } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";

import { UsersContext } from "../../context/users";

import { useMediaQuery } from "react-responsive";

const CreateScheduleModal = ({ isOpen, onClose }) => {
    const { users } = useContext(UsersContext);
    const [newScheduleName, setNewScheduleName] = useState("");
    const [newScheduleDate, setNewScheduleDate] = useState("");
    const [newScheduleHour, setNewScheduleHour] = useState("");
    const [newGuest, setNewGuest] = useState("");
    const [talkingPoints, setTalkingPoints] = useState([]);

    const isDesktop = useMediaQuery({ minWidth: 768 });

    const handleCreateSchedule = (event) => {
        event.preventDefault();

        const { startDate, endDate } = convertToTimeStamp(
            newScheduleDate,
            newScheduleHour
        );

        const data = {
            scheduleName: newScheduleName,
            startDate,
            endDate,
            guestEmail: newGuest,
            talkingPoints,
        };

        createSchedule(data);
        onClose();
    };

    const updateTalkingPoint = (index, value) => {
        const updatedTalkingPoints = [...talkingPoints];
        updatedTalkingPoints[index] = { description: value };
        setTalkingPoints(updatedTalkingPoints);
    };

    const addNewTalkingPoints = () => {
        setTalkingPoints([...talkingPoints, { description: "" }]);
    };

    return (
        <Modal
            style={{
                content: isDesktop
                    ? {
                          ...modalDesktopStyle.content,
                          height: "90vh",
                          width: "660px",
                      }
                    : {
                          ...modalMobileStyle.content,
                          height: "100%",
                          borderRadius: "none",
                      },
            }}
            isOpen={isOpen}
            onRequestClose={onClose}
        >
            <Form onSubmit={handleCreateSchedule}>
                <Container
                    className="createScheduleModalHeader"
                    style={{
                        ...modalHeaderStyle,
                        height: "50px",
                    }}
                    textAlign="left"
                >
                    <AiOutlineClose size={25} onClick={onClose} />
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
                        type="submit"
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
                                    setNewScheduleDate(event.target.value)
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
                                    setNewScheduleHour(event.target.value)
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
                        onChange={(event) => setNewGuest(event.target.value)}
                        value={newGuest}
                    >
                        <option value="">Selecione</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.email}>
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

                    {talkingPoints.map((talkingPoint, index) => (
                        <Container
                            className="talkingPoint"
                            width="100%"
                            height="fit-content"
                            display="flex"
                            alignItems="flex-start"
                            justifyContent="space-between"
                            flexDirection="column"
                            key={index}
                        >
                            <Container
                                minWidth="100%"
                                paddingBottom="20px"
                                display="flex"
                                alignItems="center"
                                justifyContent="flex-start"
                                gap="20px"
                            >
                                <BsCircleFill 
                                size={30} color={theme.colors.babyBlue} />

                                <Container width="100%">
                                    <Label
                                        style={labelStyle}
                                        htmlFor={`scheduleTopic_${index}`}
                                        children={"Nome do talking point"}
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
                        type="button"
                    />
                </Container>
            </Form>
        </Modal>
    );
};

export default CreateScheduleModal;
