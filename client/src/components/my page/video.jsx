import React from 'react';

 const video = (props) => {
  return (
      <div className='pviddiv'>
           <iframe className='pvid'
           src={props.src}>
         </iframe>
         <h2>{props.title}</h2>
         </div>
  );
};
export default video;
