import React from "react";

function CardWrapper({ children }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "start",
                columnGap: 30,
                rowGap: 50,
                flewWrap: "wrap",
            }}>
            {children}
        </div>
    );
}

export default CardWrapper;
