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
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
 
  <a href="https://calendar.google.com/calendar/u/0/r?pli=1" > <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEX///9ChfT7vAQ0qFMZZ9IYgDgac+j3KiU4gPSKsPj7ugCgvvn9027924kqpUwnpUqa0KeDxpQAbecAYNAAeyyPvJuQsOeQtvIocd50hZb/wABEhfv7wQAngoAXgDAijkEirVX5Yhu8Wjb3AAAAaef7rawNb+i30Pfr8fz2+v7a5vs9geope+kAXdBQjuxHietxoe9ime7m7vzN3vm/1fiuxe1Ni/UscNR6oeJ6pvdold6Lsvx8lLazvsb/12gUdelqne4AXeWmw/Wgv/2UvbpJmYbRhkj4UwD9zbQAeyKvzrfY5twphkR1rYRio3Tu9fDH3c25Shvcx7pHkoq4AAAFgElEQVR4nO3ca3ubNhyGcXXLWFx3J9w0O6fdGAZMwMSkx23OvHVbm7bZ9v0/zLCNABtwBUhBf67nflebq82vCHGwHMYQQgghhBBCCCGEEEJITq43HffXg4Ndem5nnzd6fNxnxuRQ5+dPnnqdfM6z4+M7vfbl0XuanD932gMXffsEhIlxsmgLjHv3CQkTY9x2D/bNuyMoPDpvtRedvnGbxIRHkzbH4jMddqGw8HlzoKcFUFR4dN78pDGiJZw8bQp0H/dt2yYqPHrS9OpGk0EqLmw8TKfkhJcNhWNqwskDCCHsKQghhLD/IIQQwv6DEEII+w9CCCHsPwghhLD/IIQQwv7TQtjjepri0hp1wmCksBc/fyXaL6qEx6OGf3Ozfv1asLufNPybdRHeu/uBWBCWghBCWUEIYX0QQigrCCGsD0IIZQUhhPXJEbrOui7fvtJa6I2j2dI0TcMP55cXwxPGgWnaRppt2dHhb+544SzJH5MROoGV8TgyPLDWfLXd3DqlIpzae76tcVXzjzmRtd3EpCIcW2XfZhdVj+h4yf8/qAhXNcAa4jwf0ESE8Q7Q3hmw1nR/a29m5m/TELrZmEuOPD8MAt8sGIy9k+Mqn3DJCOeZx5pvvmrtOivDrDa40e6AJiFcZD+zXTg7zPNXCzsxNmyDnjDIdtfO6e+Uv1w4EkelGYmE8NRPT957c0qU7i57nr7gheUpl4SQudMwMdrR3ste6rHD7Z8vChc99pKUcK2ZL63SJZqfKmbpgTjKZ6Qr1yYmTK7Dyt8GDFKFnwrdWboDzWRbk5ywIn4g8n2YzrrbC/JBCEM+SrNX1mfO9G5iEMIUUZyCfGu52HmTtHDKb5AKN7lxxEfsAIR8XjHKk+xAhBEfpEHl2+SF+S1S9S4kLnTiq+wWqfwghrQwTm4Og9Bf5tdn1rxmU6LCqbW+wc8vP+uBdIXGTmbpaeiwhPbswO8BGoTQMKL6R8IDEdp1M+lghMlUE9SMVKrC36xt+XRqz9zKTYkKmZvEHG86X2b38/whxkCEOXWcnRbNyu3JCxm7CDNi1e/HG4AwucdPiaWncIMROtmEWjGfDkLIVimj6oPSYQgv+DCtuP4ehjB7QFpxm09PWLm4JH0mbM/KbxETOqvQH7LQGxmWbVXsRDf75IK0cPPBU/Vswj87rToh0hEu+FW2Wb4XnNt1DEpC5vNTQmnCzJZoWBXrvwgJx/wuwtwbpx6/Li0txyAmdLO7XisqSuLMV3WIUhKy03zVhb/iRu8qv92vOEJpCV1+JG4WDF2Np9PVKCwsCxrA/eEi16w/wt55iGHkH3ITFh5YuFc3RqkJDxHNmpXCxIQs3lmOVxizRt1v+KcmZBdBxW60raB21T45IWOXs72F3rYVltaW5lmmvY7OOm+2XvwVWNZmtCY/eTKjHl6rz39LRGkjjYVrZHwazXzfD6/Gi7bfKtFbKCMIIawPQghlBSGE9UEIoawghLA+CCGUlTrh79+I9kKJjHfvW9GaCv/4TrSXX6jsz0eC/fV3Q+HJq+8FO/tUYQ9/+FisH39qCGQn9z8S7OxDhYkKmwOJCVsAaQnbAEkJWwEpCdsBCQlbAukI2wLJCFsDqQjbA4kIOwBpCLsASQg7ASkIuwEJCDsC9Rd2BWov7AzUXdgdqLlQAlBvoQyg1kIpQJ2FcoAaCyUB9RXKAmorlAbUVSgPqKlQIlBPoUyglkKpQPZaP6FcILvWTigZyG7eaCaUDWTsrehOvB2hfKD4ML0VoQIgY+8EibchVAJkN/oI1QAZ+0eMqF6oCihKVC5UB1wTBYyqhSqBybH47tV7jYqFaoFJ12/f3D/c2WcKe/ivamDSzfXrk4N9rrL/1AMRQgghhBBCCCGEEEJo0//S3NErxpfpUQAAAABJRU5ErkJggg==' style={{height:40, width:40}}/></a>
  <a href="https://keep.google.com/u/0/" > <img src='https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5=w240-h480-rw' style={{height:40, width:40}}/></a>
  
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