import React, { useState } from "react";
import Annotations from "../Annotations";
import Container from "../Container";
import Span from "../Span";
import Card from "../Card/Index";
import Modal from "react-modal";
import Line from "../Line";
import Button from "../Button";
import TalkingPointItem from "../TalkingPoint";

import { modalMobileStyle, modalHeaderStyle } from "../../global/styles/modal";
import { theme } from "../../global/styles/theme";
import { formatDateRange } from "../../utils";

import { BsThreeDotsVertical, BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BiCircle } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

const DetailsScheduleModal = ({ isOpen, onClose, schedule }) => {
    const [checkedCards, setCheckedCards] = useState([]);

    const handleCheckClick = (id) => {
        if (checkedCards.includes(id))
            setCheckedCards(checkedCards.filter((cardId) => cardId !== id));
        else setCheckedCards([...checkedCards, id]);
    };

    return (
        <Modal
            style={{
                content: {
                    ...modalMobileStyle.content,
                    height: "100%",
                    borderRadius: "none",
                },
            }}
            isOpen={isOpen}
            onRequestClose={onClose}
        >
            <Container
                className="detailsModalHeader"
                style={{
                    ...modalHeaderStyle,
                    height: "50px",
                    justifyContent: "flex-start",
                }}
            >
                <MdOutlineArrowBackIosNew
                    color={theme.colors.babyBlue}
                    size={25}
                    onClick={onClose}
                />
                <Span
                    width="100%"
                    textAlign="center"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="normal"
                    color={theme.colors.black}
                    marginRight="20px"
                >
                    Detalhes da 1:1
                </Span>
            </Container>

            <Line
                color={theme.colors.lightGray2}
                height="fit-content"
                width="100%"
            />

            <Container
                className="detailsModalBody"
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="20px"
            >
                <Card
                    key={schedule.id}
                    width="100%"
                    height="180px"
                    gap="10px"
                    padding="20px"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
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
                                <RxAvatar
                                    size={20}
                                    style={{ marginRight: "10px" }}
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
                                <RxAvatar
                                    size={20}
                                    style={{ marginRight: "10px" }}
                                />
                                {schedule.guest.name}
                            </Span>
                        </Container>
                    </Container>
                </Card>

                <Container
                    className="detailsTalkingPoints"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    width="100%"
                    height="fit-content"
                    backgroundColor="blue"
                    borderRadius="10px"
                    background={theme.colors.white}
                    border={`1px solid ${theme.colors.lightGray}`}
                >
                    <Container
                        className="detailsTalkingPointsHeader"
                        style={{
                            ...modalHeaderStyle,
                            height: "50px",
                            justifyContent: "flex-start",
                            paddingLeft: "20px",
                        }}
                    >
                        <Span
                            width="100%"
                            fontSize="18px"
                            fontStyle="normal"
                            fontWeight="500"
                            lineHeight="normal"
                            color={theme.colors.black}
                        >
                            Talking Points da 1:1
                        </Span>
                    </Container>

                    <Line
                        borderColor={theme.colors.lightGray3}
                        height="fit-content"
                        width="100%"
                        marginTop="0px"
                    />

                    {schedule.talkingPoints.map((talkingPoint, index) => (
                        <TalkingPointItem
                            index={index}
                            talkingPoint={talkingPoint}
                        />
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
                        // onClick={addTalkingPoint}
                        type="button"
                        padding="10px 20px"
                    />
                </Container>

                <Annotations schedule={schedule} />
            </Container>
        </Modal>
    );
};

export default DetailsScheduleModal;
