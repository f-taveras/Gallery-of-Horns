import React from 'react';
import Gallery from './Gallery';



function HornedBeast(props){
  return(
<>
{
  props.list.map((animal,indx) => {
 return <Gallery key={indx} name={animal.title} description={animal.description} img={animal.image_url}/>
  
  })
}
</>
  )
}


export default HornedBeast;