import React, { useState } from 'react';

import './upload.css';

function upload_img(event, videoDetails, setVideoDetails, setVideoLabel, setShowModalVideo) {
    if (event.target.files[0]) {
        if (/video\/*/.test(event.target.files[0].type)) {
            const reader = new FileReader();

            reader.onload = function () {
                setVideoDetails({
                    ...videoDetails,
                    img_blob: reader.result
                });
                setVideoLabel(false);
                setShowModalVideo(true);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}

function Up()
  {
    
    const [videoDetails, setVideoDetails] = useState({
        title: '',
        description: '',
        img_blob: '', 
    });

    const [videoLabel, setVideoLabel] = useState(true);
    const [showModalVideo, setShowModalVideo] = useState(false);

    return (
        <form>
        <div className="upload_box">
            <div className="upload_container">
           
                <div className="parts" id="left_part">
                    
                    <div className="s1">

                        <label For="upload_video" id="upload_video_label" style={{
                               display: videoLabel ? 'block' : 'none' }}>

                            <div className="upload_video_container">
                                <div id="dotted_border">
                                    <div>Click to upload</div>
                                </div>
                            </div>

                            <input onChange={event => upload_img(event, videoDetails, setVideoDetails, setVideoLabel, setShowModalVideo)} type="file" name="upload_video" id="upload_video" value="" accept = "video/*" />

                        </label>
                        
                        <div className="video_img_container" style={{
                               display: showModalVideo ? 'block' : 'none' }}>
                            <div className="video_img">
                                <video src={videoDetails.img_blob} alt="pin_image"/>
                            </div>
                        </div>

                    </div>

                    <div className="s2">
                        <input type = "submit" className = "video_submit" required/>
                    </div>
                  
                   
                </div>
                    
                
                <div className="parts" id="right_part">
              
                    <div className="s1">
                        <input placeholder="Add Title" type="text" className="input_take" required/>
                        <input placeholder="Add Description " type="text" className="input_take" />
                    </div>

                </div>
            </div>
        </div>
        </form>
    )
}

export default Up;