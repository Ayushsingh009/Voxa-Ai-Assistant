import React, { useContext } from "react"
import "./App.css"
import va from "./assets/voxa (2).png"
import { FaMicrophone } from "react-icons/fa";
import { datacontext } from "./Context/UserContext";
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice (1).gif"
function App(){
  let {recognition,speaking,setSpeaking,prompt,setPrompt,response,setResponse}= useContext(datacontext)
  return(
    <div className = "main">
    <img src ={va} alt="" id="voxa"/>
    <span>I'm Voxa,Your Advanced Virtual Assistant</span>
    {!speaking? 
    <button onClick={()=>{
      setPrompt("listening....")
      setSpeaking(true)
      setResponse(false)
      recognition.start()
    }}>Click here <FaMicrophone/>
    </button>  
  :
  <div className="response">
    {!response ? <img src={speakimg} alt="" id="speak"/>
    :
    <img src={aigif} alt="" id="aigif"/>
     }
    <p>
      {prompt}
    </p>
    </div>
  }
    </div>
  )
}
export default App
