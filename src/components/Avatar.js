import React from "react";

function Avatar({ avatarImg }) {
    return (
        <div
            style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: !avatarImg && "gray",
            }}>
            {avatarImg && (
                <img
                    src='{avatarImg}'
                    alt='sample'
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                    }}
                />
            )}
        </div>
    );
}

export default Avatar;
