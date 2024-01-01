import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const pStyle = {
  padding: '20px',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const Slideshow = (props) => {
    return (
      <div className="slide-container mt-0 pt-0">
        <Slide>
         {props.data?props.data.map((slideImage, index)=> (
            <div id='slideshowParent' key={index} className='mt-0'>
              <div id='slideshowDiv' className='container-fluid' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.img})` }}>
                {/* <p style={pStyle}>{slideImage.name}{console.log(slideImage.name)}</p> */}
              </div>
            </div>
          )):"no content available"} 
        </Slide>
      </div>
    )
}
export default Slideshow