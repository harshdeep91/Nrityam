import React from 'react';
import Video from "./video"
import vid from "./vid"
import "./mypage.css"

const mypage = () => {

  return <div className='mypage'>
               <div className='containerz'>
            <div className='profile'>
        <div className='dimg'>
        <img className='pimg'
              src='https://image.cnbcfm.com/api/v1/image/106330923-1578676182018gettyimages-1178141599.jpeg?v=1584633147&w=1400&h=950' />
       </div>
        <div className='pname'>
            HARSHDEEP RAGHUWANSHI
        </div>
        <div className='pfollo'>
          <h5>Followors 39</h5>
        </div>
        <div className='pedit'>
        
          <button className="btn btn-secondary m-2">
          <h5>Share</h5>
          </button>
          <button className="btn btn-secondary m-2">
           <h5>Edit Profile</h5>
          </button>
          <button className="btn btn-secondary m-2">
            <h5>Log Out</h5>
          </button>


   

        </div>
      </div>
    </div>
    <h1>Videos</h1>
    <div className='video'>
     
     {
       vid.map((v)=>{
       return <Video src={v.src} title={v.title}/>
         })
     }
    </div>
  </div>
};
export default mypage;