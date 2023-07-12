import React, { useContext, useState } from "react";
import Modal from "react-modal";
import Container from "../Container";
import Button from "../Button";
import Line from "../Line";
import Span from "../Span";
import Label from "../Label";
import Form from "../Form";
import Input from "../Input";
import Select from "../Select";

import { UsersContext } from "../../context/users";

import { theme } from "../../global/styles/theme";

import { modalStyle, modalHeaderStyle } from "../../global/styles/modal";
import { labelStyle } from "../../global/styles/label";
import { inputStyle } from "../../global/styles/input";

import { updateSchedule } from "../../services/api";

import { AiOutlineClose } from "react-icons/ai";

const EditModal = ({
    isOpen,
    onClose,
    schedule,
}) => {
    const { users } = useContext(UsersContext);

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

    const handleEditSchedule = (event) => {
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

        updateSchedule(data, schedule.id);
    };



    return (
        <Modal
            style={{
                content: {
                    ...modalStyle.content,
                    height: "100%",
                    borderRadius: "none",
                },
            }}
            isOpen={isOpen}
            onRequestClose={onClose}
        >
            <Form onSubmit={(event) => handleEditSchedule(event)}>
                <Container
                    className="editModalHeader"
                    style={{
                        ...modalHeaderStyle,
                        height: "50px",
                    }}
                    textAlign="left"
                >
                    <AiOutlineClose size={25} onClick={onClose} />
                    Editar conversa 1:1
                    <Button
                        color={theme.colors.white}
                        backgroundColor={theme.colors.babyBlue}
                        borderRadius="50px"
                        fontSize="15px"
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="normal"
                        children="Editar"
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
                        onChange={(event) =>
                            setNewScheduleName(event.target.value)
                        }
                        value={
                            newScheduleName !== undefined
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
                                style={labelStyle}
                                htmlFor="scheduleDate"
                                children={"Data da 1:1"}
                            />
                            <Input
                                style={inputStyle}
                                type="date"
                                name="scheduleDate"
                                onChange={(event) =>
                                    setNewScheduleDate(event.target.value)
                                }
                                value={
                                    newScheduleDate !== undefined
                                        ? newScheduleDate
                                        : schedule.startDate
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
                                value={
                                    newScheduleHour !== undefined
                                        ? newScheduleHour
                                        : "15:10"
                                }
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
                        value={schedule.guest}
                    >
                        <option
                            key={schedule.guest.email}
                            value={schedule.guest.email}
                        >
                            {schedule.guest.name}
                        </option>
                        {users
                            .filter((user) => user.name !== schedule.owner.name)
                            .filter((user) => user.name !== schedule.guest.name)
                            .map((user) => (
                                <option
                                    key={user.id}
                                    value={user.email}
                                    defaultValue={
                                        user.name === schedule.guest.name
                                    }
                                >
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
                                        style={labelStyle}
                                        htmlFor={`scheduleTopic_${index}`}
                                        children={"Nome do talking point"}
                                    />
                                    <Input
                                        style={inputStyle}
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
                        children="+ Adicionar novo ponto"
                        onClick={addTalkingPoint}
                        type="button"
                    />
                </Container>
            </Form>
        </Modal>
    );
};

export default EditModal;
