import React, { Component } from 'react';
import Gallerina from './Gallerina';
import GallerinaImage from './GallerinaImage';
import PageIndicator from './PageIndicator';

export default class App extends Component{
  constructor(props){
    super(props);
    this.imgs = [
      {
        src: "https://i.picsum.photos/id/237/400/200.jpg"
      },
      {
        src: "https://i.picsum.photos/id/866/400/200.jpg"
      },
      {
        src: "https://i.picsum.photos/id/93/400/200.jpg?grayscale"
      },
      {
        src: "https://i.picsum.photos/id/1/400/200.jpg"
      },
      {
        src: "https://i.picsum.photos/id/2/400/200.jpg?grayscale"
      }
    ];
  }
  render(){
    const {imgs} = this;
    return(
      /**TODO:
         * navigators with style and click functionality
         * passing user defined styling to GallerinaImage
         * callBack function on image change in carousel
         * ADDITIONAL FEATURES IF TIME PERMITS:
          * add device swipes
          * how many images to show at a time on screen
          * lazy load of images
         * 
      */
      <Gallerina 
      startingIndex={3} 
      autoScroll={3000}
      >
        {imgs.map((image, i) => <GallerinaImage image={image} key={i} />)}
        <PageIndicator  />
      </Gallerina>
    )
  }
}
