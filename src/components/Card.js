import React from "react";
import Avatar from "./Avatar";
import CardFooter from "./CardFooter";
import Image from "./Image";
import { ReactComponent as Icon } from "./icon.svg";
import "./Card.css";

function Card({ coverImg, avatarImg, title, nickname, view, month, playtime }) {
    return (
        <div
            className='card'
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 320,
                gap: 7,
            }}>
            <Image coverImg={coverImg} playtime={playtime} />
            <div
                style={{
                    display: "flex",
                    gap: 15,
                }}>
                <Avatar avatarImg={avatarImg} />
                <div
                    style={{
                        flex: 1,
                    }}>
                    <div
                        style={{
                            fontSize: 14,
                            fontWeight: 500,
                        }}>
                        {title}
                    </div>
                    <CardFooter nickname={nickname} view={view} month={month} />
                </div>
                <span
                    style={{
                        fontSize: 20,
                    }}>
                    <button
                        style={{
                            border: "none",
                            outline: "none",
                            background: "none",
                            padding: "2px 3px",
                            cursor: "pointer",
                        }}>
                        <Icon width='16' height='16' />
                    </button>
                </span>
            </div>
        </div>
    );
}

export default Card;
