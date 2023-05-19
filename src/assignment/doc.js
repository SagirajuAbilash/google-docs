import React, { useCallback } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"

  
 
  

import {
  EmailIcon,
  FacebookIcon,


  TwitterIcon,
 
  WhatsappIcon,
 
} from "react-share";


const TOOL_OPTIONS=[
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],             
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      
    [{ 'indent': '-1'}, { 'indent': '+1' }],          
    [{ 'direction': 'rtl' }],                         
  
    [{ 'size': ['small', false, 'large', 'huge'] }], 
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],         
    [{ 'align': [] }],
  
    ['clean'] 
   
]



function TextEditor(){

 
   


    function openNav() {
        document.getElementById("mySidenav").style.width = "150px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

    const wrappeRef = useCallback(wrapper => {
        if (wrapper == null ) return

        wrapper.innerHtml = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill (editor, {theme: "snow", modules:{toolbar: TOOL_OPTIONS}})
    }, [])
    return(
            <>
            
            <div className="container"  ref={wrappeRef}>
            <div id="mySidenav" className="sidenav" style={{textAlign:'center'}}>
  <a className="closebtn" onClick={closeNav}>&times;</a>
 
  <a href="https://calendar.google.com/calendar/u/0/r?pli=1" > <img src='data:image/png;base64,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' style={{height:40, width:40}}/></a>
  <a href="https://keep.google.com/u/0/" > <img src='https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5=w240-h480-rw' style={{height:40, width:40}}/></a>
  <a href="https://www.google.com/maps/@12.9794048,77.6208384,12z" > <img src='data:image/png;base64,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' style={{height:40, width:40}}/></a>
 <hr style={{width:60}}></hr>
 <h6>share</h6>



  <FacebookIcon size={32} round /><br/>
  <WhatsappIcon size={32} round/><br/>
  <TwitterIcon size={32} round/><br/>
  <EmailIcon size={32} round/>

</div>


<span style={{fontSize:30, cursor:"pointer", color:'white',  fontWeight:400}} onClick={openNav}>open&#187; </span>


 </div>
            
            </>

    )
    }

    export default TextEditor;