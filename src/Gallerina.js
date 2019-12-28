import React, { Component } from 'react';

export default class Gallerina extends Component{
    constructor(props){
        super(props);
        const GallerinaChildren = React.Children.toArray(this.props.children);
        this.GallerinaImages = GallerinaChildren.filter( image => image.type.name === "GallerinaImage");
        this.PageIndicator = GallerinaChildren.find(child => child.type.name === "PageIndicator");

        this.state = {
            selectedIndex: props.startingIndex || 0
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
        if(this.PageIndicator){
            this.PageIndicator = React.cloneElement(this.PageIndicator, {length: this.GallerinaImages.length, selectedIndex: this.state.selectedIndex});
        }
        const {state: {selectedIndex}, GallerinaImages, PageIndicator} = this;
        let ActiveImage = GallerinaImages[selectedIndex];
        ActiveImage = React.cloneElement(ActiveImage, {className: 'active'});

        return(
            <div style={{
                maxWidth: '100%',
                height: 'auto'
            }}>
                {ActiveImage}
                {/* TODO: Add support for adding PageIndicator to its appropriate place where user has defined <PageIndicator /> */}
                {PageIndicator}
            </div>
        )
    }
}
