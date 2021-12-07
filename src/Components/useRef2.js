import React, {useRef, useState} from 'react'

const MessageInputComponent = () => {
 const [message, setMessage] = useState("")
 const sentMessage = useRef(0);
 console.log('outside return')
 const sendMessage = () => {
    if(sentMessage.current === 3){
      return alert("Message Limit Reached")
    }
    
    sentMessage.current += 1
   //code to handle sending message
 }
 
 return(
   <div>
     {sentMessage.current}
     <input onChange = {(e) => setMessage(e.target.value)} value={message}/>
     <button onClick={sendMessage}>Send</button>
   </div>
 )
}

export default MessageInputComponent