import React, { Component } from 'react';
import Gallerina from './Gallerina';
import GallerinaImage from './GallerinaImage';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
    this.imgs = [
      {
        img: "https://i.picsum.photos/id/237/400/200.jpg"
      },
      {
        img: "https://i.picsum.photos/id/866/400/200.jpg"
      },
      {
        img: "https://i.picsum.photos/id/93/400/200.jpg?grayscale"
      },
      {
        img: "https://i.picsum.photos/id/1/400/200.jpg?grayscale"
      },
      {
        img: "https://i.picsum.photos/id/2/400/200.jpg?grayscale"
      }
    ];
  }
  render(){
    const {state: {index}, imgs} = this;
    return(
      <Gallerina startingIndex={index}>
        {imgs.map((image, i) => <GallerinaImage image={image} key={i} />)}
      </Gallerina>
    )
  }
}
