import { createContext, useState } from "react";

export const TalkingPointContext = createContext({});

function TalkingPointProvider({ children }) {
    const [checkedTalkingPoints, setCheckedTalkingPoints] = useState([]);

    const handleTalkingPointCheckClick = (talkingPoint) => {
        if (checkedTalkingPoints.includes(talkingPoint))
            setCheckedTalkingPoints(
                checkedTalkingPoints.filter((tp) => tp !== talkingPoint)
            );
        else setCheckedTalkingPoints([...checkedTalkingPoints, talkingPoint]);
    };

    return (
        <TalkingPointContext.Provider
            value={{
                checkedTalkingPoints,
                setCheckedTalkingPoints,
                handleTalkingPointCheckClick,
            }}
        >
            {children}
        </TalkingPointContext.Provider>
    );
}

export default TalkingPointProvider;
