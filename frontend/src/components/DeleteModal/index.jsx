import React from "react";
import Modal from "react-modal";
import Container from "../Container";
import Button from "../Button";
import Line from "../Line";
import Span from "../Span";
import Form from "../Form";

import { theme } from "../../global/styles/theme";
import { modalStyle, modalHeaderStyle } from "../../global/styles/modal";

import { deleteSchedule } from "../../services/api";

import { AiOutlineClose } from "react-icons/ai";

const DeleteModal = ({ isOpen, onClose, schedule }) => {
    const handleDeleteSchedule = () => {
        deleteSchedule(schedule.id)
    }

    return (
        <Modal style={modalStyle} isOpen={isOpen} onRequestClose={onClose}>
            <Form onSubmit={handleDeleteSchedule}>
                <Container
                    className="deleteModalHeader"
                    style={modalHeaderStyle}
                >
                    <AiOutlineClose size={25} onClick={onClose} />
                    Excluir conversa 1:1
                    <Button
                        color={theme.colors.red}
                        backgroundColor={theme.colors.lightRed}
                        borderRadius="50px"
                        fontSize="15px"
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="normal"
                        children="Excluir"
                        type="submit"
                    />
                </Container>

                <Line
                    color={theme.colors.lightGray2}
                    height="fit-content"
                    width="100%"
                />

                <Container
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    height="50%"
                    color={theme.colors.black}
                    textAlign="center"
                    flexShrink="0"
                    fontSize="18px"
                    fontStyle="normal"
                    lineHeight="28px"
                >
                    Tem certeza que deseja excluir
                    <Span fontWeight="600">{schedule.scheduleName}?</Span>
                </Container>
            </Form>
        </Modal>
    );
};

export default DeleteModal;
