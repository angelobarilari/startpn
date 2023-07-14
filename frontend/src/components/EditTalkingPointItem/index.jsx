import React, { useState } from "react";
import Container from "../Container";
import Label from "../Label";
import Input from "../Input";
import Line from "../Line";

import { theme } from "../../global/styles/theme";
import { labelStyle } from "../../global/styles/label";
import { inputStyle } from "../../global/styles/input";

import { FiTrash2 } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";

const EditTalkingPointItem = ({
    talkingPoint,
    index,
    talkingPoints,
    setTalkingPoints,
}) => {
    const [description, setDescription] = useState(talkingPoint.description);

    const updateTalkingPoint = (index, value) => {
        const updatedTalkingPoints = [...talkingPoints];
        updatedTalkingPoints[index] = { description: value };
        setTalkingPoints(updatedTalkingPoints);
    };

    const removeTalkingPoint = (index) => {
        const updatedTalkingPoints = talkingPoints.filter(
            (_, i) => i !== index
        );
        setTalkingPoints(updatedTalkingPoints);
    };

    return (
        <Container
            className="talkingPoint"
            width="100%"
            height="fit-content"
            display="flex"
            alignItems="stretch"
            justifyContent="space-between"
            flexDirection="column"
            key={index}
        >
            <Container
                minWidth="100%%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <BsCircleFill size={30} color={theme.colors.babyBlue} />

                <Container paddingBottom="20px" width="80%">
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
                            updateTalkingPoint(index, event.target.value)
                        }
                        value={description}
                    />
                </Container>

                <FiTrash2
                    size={25}
                    color="#555555"
                    onClick={() => removeTalkingPoint(index)}
                />
            </Container>

            <Line
                borderColor={theme.colors.lightGray2}
                height="fit-content"
                width="100%"
                margin="0px"
            />
        </Container>
    );
};

export default EditTalkingPointItem;
