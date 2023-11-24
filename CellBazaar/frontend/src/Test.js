import React from 'react'
import { sendMessageViaAxios } from './Services/api';

export default function Test() {

  async function handleMessageSending(){
      console.log("button clicked");
      await sendMessageViaAxios();
  }
  return (
    <div>
      
      <button>send data to backend</button>

    </div>
  )
}
