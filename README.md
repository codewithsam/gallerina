# Gallerina | Fully Customizable Carousel
This is gallerina, a fully customizable carousel *to the very last bit.*

### Features Prodivede By Gallerina
* Header and Footer on top of Image
* Left and Right Nav buttons
* Page Indicators to let you know which image you are currently on
* Show any image as you Initial point
* Autoscroll with custom intervals
* Fully Customizable by providing css to any of the components
* Callback for image click
* Callback on when image is changed either by left or right nav links

```
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
```

#### Autoscroll of images
Pass autoScroll to \<Gallerina /> component with your interval. If autoScroll is passed but no Interval is passed then the default interval will be set.
If autoScroll is passed with interval, default one will be overridden by your interval.

```
<Gallerina
   autoScroll={Interval}
>
```

#### Provide you Start Index
If you do not want your carousel to start from 0 (first image) you can pass startingIndex prop of type number to \<Gallerina />.

```
<Gallerina
   startingIndex={index}
>
```

#### Pass your callback to do stuff when carousel is moved to next Image
If you want to run some logic after the image is moved to next index then do pass onChange prop to \<Gallerina /> component

```
<Gallerina
   onChange={function}
>
```

#### GallerinaImage: Component that will create an image inside the Gallerina Div
Pass \<GallerinaImage /> inside \<Gallerina /> component to create an image element.
GallerinaImage takes following Component:
* image of type object (schema of object is explained below)
* onImageClick of type function that will run when image is clicked

image prop takes an object with following properties

```
{
    src: "https://i.picsum.photos/id/237/400/200.jpg", // Takes src for image source
    header: <YourHeaderCompoennt /> // Its takes custom component that will show on top of image
    footer: <YourFooterComponent /> // Footer as your custom compoennt that will show on bottom of image
},
```
Full support for styling both components


#### \<NavLeft /> && \<NavRight /> for showing left and right button on iamge
Left and right button is used to move left/right in carousel. It will run your callback exactly in case autoscroll
Both of the component takes styles as a prop where you can define your style

#### \<PageIndicator /> to show indicators
This component also takes styles as prop.