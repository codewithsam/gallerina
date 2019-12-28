import React, { Component } from 'react';
import Gallerina, {NavLeft, NavRight} from './Gallerina';
import GallerinaImage from './GallerinaImage';
import PageIndicator from './PageIndicator';

export default class App extends Component{
  constructor(props){
    super(props);
    this.imgs = [
      {
        src: "https://i.picsum.photos/id/237/400/200.jpg",
        header: <div style={{
          position: "absolute",
          left: "0",
          top: "0",
          backgroundColor: "rgba(20,20,20,0.3)",
          fontSize: "20px",
          color: "#fff"
        }}>Header Part</div>,
        footer: <div style={{
          position: "absolute",
          left: "0",
          bottom: "20px",
          backgroundColor: "rgba(20,20,20,0.3)",
          fontSize: "20px",
          color: "#fff"
        }}>Footer Part</div>
      },
      {
        src: "https://i.picsum.photos/id/866/400/200.jpg"
      },
      {
        src: "https://i.picsum.photos/id/93/400/200.jpg?grayscale",
      },
      {
        src: "https://i.picsum.photos/id/1/400/200.jpg"
      },
      {
        src: "https://i.picsum.photos/id/2/400/200.jpg?grayscale"
      }
    ];
  }
  imageChanged = (i) => {
    console.log("Changed image to Index: "+ i);
  }
  imageOnClick = (i) => {
    alert("clicked on image with index: " + i);
  }
  render(){
    const {imgs} = this;
    return(
      /**TODO:
         * ADDITIONAL FEATURES IF TIME PERMITS:
          * add device swipes
          * how many images to show at a time on screen
          * lazy load of images
         * 
      */
      <Gallerina 
      startingIndex={0} 
      autoScroll={3000}
      onChange={this.imageChanged}
      >
        {imgs.map((image, i) => <GallerinaImage image={image} key={i} onImageClick={this.imageOnClick}/>)}
        <NavLeft />
        <NavRight />
        <PageIndicator  />
      </Gallerina>
    )
  }
}
