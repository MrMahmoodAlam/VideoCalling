import React from 'react'

import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function Room() {

    const id = Number(process.env.REACT_APP_ID)
    const server = String(process.env.REACT_APP_SERVER)
    const {roomId} =  useParams();

    const meeting  = async (element)=>{
        const appId = id;
        const serverSecret = server;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), roomId);
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container : element,
            sharedLinks : [
                {
                    name : 'Copy Link',
                    url : `https://MrMahmoodAlam.github.io/VideoCalling/room/${roomId}`
                }
            ],
            scenario : {
                mode : ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton : true
        })
    }

  return (
    <div>
        <div ref={meeting}/>
    </div>
  )
}
