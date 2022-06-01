import React from "react";

function CardFooter({ nickname, view, month }) {
    return (
        <div
            style={{
                fontSize: 12,
                color: "rgb(96,96,96)",
            }}>
            <div>{nickname}</div>
            <div>
                <span>조회수 {view}회</span>
                <span
                    style={{
                        padding: "0px 5px",
                    }}></span>
                <span>{month}개월 전</span>
            </div>
        </div>
    );
}

export default CardFooter;
