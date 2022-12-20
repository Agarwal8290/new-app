import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Room = () => {

    const{roomID} = useParams();
    console.log(roomID);

    const meeting = async (element) => {
     const appID = 1954699719;
     const serverSecret = "37a6b2d4a005a002c4a5a4651bc065cb";
     const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID , 
        serverSecret,roomID,Date.now().toString(),"Nitesh");
    

    const zp = ZegoUIKitPrebuilt.create(KitToken);

    zp.joinRoom({
        container: element,
        scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
        },
    }
    );
}

  return (
    <div ref={meeting}
    style={{ width: '100vw', height: '100vh' }}>
   
    </div>
  )
}

export default Room
