import React, { Component } from 'react';

export default class Gallerina extends Component{
    constructor(props){
        super(props);
        const GallerinaChildren = React.Children.toArray(this.props.children);
        this.GallerinaImages = GallerinaChildren.filter( image => image.type.name === "GallerinaImage");
        this.PageIndicator = GallerinaChildren.find(child => child.type.name === "PageIndicator");
        this.NavLeft = GallerinaChildren.find(child => child.type.name === "NavLeft");
        this.NavRight = GallerinaChildren.find(child => child.type.name === "NavRight");

        this.state = {
            selectedIndex: props.startingIndex || 0
        }
        if(this.NavLeft){
            this.NavLeft = React.cloneElement(this.NavLeft, {clickHandler: this.onNavLeftClick});
        }
        if(this.NavRight){
            this.NavRight = React.cloneElement(this.NavRight, {clickHandler: this.onNavRightClick});
        }
    }

    componentDidMount(){
        const {autoScroll} = this.props;
        let scrollTimer = 600;
        if(typeof autoScroll !== 'undefined'){
            setInterval(()=>{
                let index = this.state.selectedIndex;
                index++;
                this.updateIndexChange(index)
            }, typeof autoScroll === 'number' ? autoScroll: scrollTimer);
        }
    }
    updateIndexChange(index){
        this.setState({
            selectedIndex: index > this.GallerinaImages.length - 1 ? 0 : index < 0 ? this.GallerinaImages.length - 1 : index
        }, ()=> {
            this.props.onChange(this.state.selectedIndex);
        });
    }
    onNavLeftClick = () => {
        this.updateIndexChange(this.state.selectedIndex - 1);
    }
    onNavRightClick = () => {
        this.updateIndexChange(this.state.selectedIndex + 1);
    }
    render(){
        if(this.PageIndicator){
            this.PageIndicator = React.cloneElement(this.PageIndicator, {length: this.GallerinaImages.length, selectedIndex: this.state.selectedIndex});
        }
        const {state: {selectedIndex}, GallerinaImages, PageIndicator, NavLeft, NavRight} = this;
        let ActiveImage = GallerinaImages[selectedIndex];
        ActiveImage = React.cloneElement(ActiveImage, {className: 'active', selectedIndex: selectedIndex});

        return(
            <div style={{
                display: "flex",
                flexDirection: "Column",
                position: "relative"
            }}>
                {ActiveImage}
                {/* TODO: Add support for adding PageIndicator to its appropriate place where user has defined <PageIndicator /> */}
                {PageIndicator}
                {NavLeft}
                {NavRight}
            </div>
        )
    }
}

export function NavLeft({styles,clickHandler}){
    return(
        <button style={{
            backgroundColor: "rgba(20,20,20,0.3)",
            border: "none",
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-70%)",
            fontSize: "40px",
            color: "#fff",
            fontWeight: "bold",
            ...styles
        }} onClick={clickHandler}>
            &lt;
        </button>
    )
}

export function NavRight({styles,clickHandler}){
    return(
        <button style={{
            backgroundColor: "rgba(20,20,20,0.3)",
            border: "none",
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-70%)",
            fontSize: "40px",
            color: "#fff",
            fontWeight: "bold",
            ...styles
        }} onClick={clickHandler}>
            &gt;
        </button>
    )
}
