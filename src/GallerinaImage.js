import React, { Component } from 'react';

export default class GallerinaImage extends Component{
    render(){
        const {props: {image: {src}}} = this;
        return(
            <img src={src} alt={src} />
        )
    }
}
