import React from "react";

function Image({ coverImg, playtime }) {
    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
                width: 320,
                height: 180,
                maxWidth: 320,
                maxHeight: 180,
                background: !coverImg && "gray",
            }}>
            {coverImg && (
                <>
                    <img
                        src={coverImg}
                        alt='sample'
                        style={{
                            display: "inline-block",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <span
                        style={{
                            position: "absolute",
                            right: 10,
                            bottom: 10,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            padding: "3px 6px",
                            borderRadius: 5,
                            fontWeight: 600,
                            fontSize: 12,
                        }}>
                        {playtime}
                    </span>
                </>
            )}
        </div>
    );
}

export default Image;
