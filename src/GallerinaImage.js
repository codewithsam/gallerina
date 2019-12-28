import React from 'react';

export default function GallerinaImage({image: {src, header, footer}, onImageClick, selectedIndex}){
    return(
        <div onClick={onImageClick.bind(null, selectedIndex)} style={{
            display: "flex",
            width: '100%'
        }}>
            <img src={src} alt={src} style={{
                objectFit: "contain",
                width: "100%"
            }} />
            {header}
            {footer}
        </div>
    )
}