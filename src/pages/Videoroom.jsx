import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom';

const Videoroom = () => {
    let {roomID}=useParams()
    const myMeeting=async (element)=>{
        const appID =104115722 ;
        const serverSecret = "b0a36a71eed953a04fab046953618cfd";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"SurajKewat");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Copy Link',
                url:`http://localhost:5173/room/${roomID}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          });
    }
  return (
    <div className="video-room-wrapper">
      <div className="video-room-container" ref={myMeeting} />
    </div>
  )
}

export default Videoroom
