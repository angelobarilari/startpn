import React, { useContext } from "react";
import Container from "../Container";
import Span from "../Span";

import { theme } from "../../global/styles/theme";

import { BsCheckCircleFill } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";
import { TalkingPointContext } from "../../context/talkingPoint";

const TalkingPointItem = ({ talkingPoint, index }) => {
    const { checkedTalkingPoints, handleTalkingPointCheckClick } =
        useContext(TalkingPointContext);

    return (
        <Container
            className="talkingPoint"
            width="100%"
            height="fit-content"
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            flexDirection="column"
            key={index}
            paddingLeft="20px"
        >
            <Container
                minWidth="100%"
                paddingBottom="20px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                color="black"
                gap="20px"
            >
                {checkedTalkingPoints.includes(talkingPoint) ? (
                    <BsCheckCircleFill
                        size={25}
                        style={{
                            color: theme.colors.babyBlue,
                            backgroundColor: theme.colors.white,
                            borderRadius: "100%",
                        }}
                        onClick={() =>
                            handleTalkingPointCheckClick(talkingPoint)
                        }
                    />
                ) : (
                    <BiCircle
                        size={25}
                        style={{
                            color: theme.colors.babyBlue,
                            borderRadius: "100%",
                        }}
                        onClick={() =>
                            handleTalkingPointCheckClick(talkingPoint)
                        }
                    />
                )}

                <Span
                    width="90%"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                    textAlign="left"
                >
                    {talkingPoint.description}
                </Span>
            </Container>
        </Container>
    );
};

export default TalkingPointItem;
