import React from 'react';

export default function GallerinaImage({image: {src, header, footer}, onImageClick, selectedIndex}){
    return(
        <div onClick={onImageClick.bind(null, selectedIndex)}>
            <img src={src} alt={src} />
            {header}
            {footer}
        </div>
    )
}