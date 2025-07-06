import  React, {createContext, useState} from 'react'
import { MdAllInclusive } from 'react-icons/md'
 export const datacontext = createContext()
 import main from "../gemini.js";

function UserContext({children}){
    let[speaking,setSpeaking]=useState(false)
    let[prompt,setPrompt] = useState("listening.....") 
    let[response,setResponse]= useState(false)
    function speak(text){
        let text_speak = new SpeechSynthesisUtterance(text)
        text_speak.volume =1;
        text_speak.pitch =1.1;
        text_speak.rate =0.97;
        text_speak.lang ="en-GB"
        window.speechSynthesis.speak(text_speak)
    }
     async function aiResponse(prompt){ 
      try {
        let text = await main(prompt)
        console.log("AI response:", text)
        let newText = text.split("**")&&text.split("*")&&text.replace("google","Ayush Singh")&&text.replace("Google","Ayush Singh")
        setPrompt(newText)
        speak(newText)
        setResponse(true)
        setTimeout(()=>{
          setSpeaking(false)
        },7000)
      } catch (error) {
        console.error("AI response error:", error)
        setPrompt("Sorry, I couldn't get a response from the AI.")
        setSpeaking(false)
      }
     }

    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition = new speechRecognition()
    recognition.onresult= (e)=>{
     let currentIndex = e.resultIndex
     let transcript = e.results[currentIndex][0].transcript
     setPrompt(transcript)
    takecommand(transcript.toLowerCase())
    }
    function takecommand(command){
      if(command.includes("open")&& command.includes("youtube")){
        window.open("https://www.youtube.com/","_blank")
        speak("opening youtube...")
         setResponse(true)
        setPrompt("opening youtube..")
        setTimeout(()=>{
          setSpeaking(false)
        },7000)
      }
       if(command.includes("open")&& command.includes("github")){
        window.open("https://www.github.com/","_blank")
        speak("opening github...")
         setResponse(true)
        setPrompt("opening github..")
        setTimeout(()=>{
          setSpeaking(false)
        },7000)
      }
       if(command.includes("open")&& command.includes("instagram")){
        window.open("https://www.instagram.com/","_blank")
        speak("opening insta...")
         setResponse(true)
        setPrompt("opening insta..")
        setTimeout(()=>{
          setSpeaking(false)
        },7000)
      }
       if(command.includes("open")&& command.includes("leetcode")){
        window.open("https://www.leetcode.com/","_blank")
        speak("opening leetcode...")
         setResponse(true)
        setPrompt("opening leetcode...")
        setTimeout(()=>{
          setSpeaking(false)
        },7000)
      }
      else{
        aiResponse(command)
      }
    }
    let value ={
          recognition,speaking,setSpeaking,prompt,setPrompt,response,setResponse
    }

return(
<div>
    <datacontext.Provider value={value}>
{children}
    </datacontext.Provider>

</div>
)
}
export default UserContext