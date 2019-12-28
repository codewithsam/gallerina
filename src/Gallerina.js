import React, { Component } from 'react';

export default class Gallerina extends Component{
    constructor(props){
        super(props);
        this.GallerinaImages = React.Children.toArray(this.props.children);
        this.state = {
            selectedIndex: props.startingIndex
        }
    }

    componentDidMount(){
        const {autoScroll} = this.props;
        let scrollTimer = 600;
        if(typeof autoScroll !== 'undefined'){
            setInterval(()=>{
                let index = this.state.selectedIndex;
                index++;
                this.setState({
                    selectedIndex: index > this.GallerinaImages.length - 1 ? 0 : index < 0 ? this.GallerinaImages.length - 1 : index
                });
            }, typeof autoScroll === 'number' ? autoScroll: scrollTimer);
        }
    }
    render(){
        const {state: {selectedIndex}, GallerinaImages} = this;
        
        let ActiveImage = GallerinaImages[selectedIndex];
        ActiveImage = React.cloneElement(ActiveImage, {className: 'active'});

        return(
            <div style={{
                maxWidth: '100%',
                height: 'auto'
            }}>{ActiveImage}</div>
        )
    }
}
