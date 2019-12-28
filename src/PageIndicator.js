import React from "react";

export default function PageIndicator({length, styles, selectedIndex}){
    let elems = [];
    for(let i=0;i<length;i++){
        elems.push(<span key={i} style={{
            backgroundColor: selectedIndex===i ? "#88c6e3" : "#eee",
            border: "1px solid #444",
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            marginRight: "2px",
            marginTop: "10px",
            ...styles
        }}></span>)
    }
    return(
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        }}>
            {elems}
        </div>
    )
}