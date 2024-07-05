import axios from "axios";
import { useEffect, useState,useRef } from "react"

function Chat()
{

    const [chat,getchat]=useState([]);
    const [prevChat, setPrevChat] = useState([]);
    const sentaudio = useRef(null);
    const reciveaudio = useRef(null);


    useEffect(()=>{
        if(!localStorage.getItem("userlog"))
            {
                alert("have to login first");
                window.location.href="/login"
            }
    },[1])
    
    useEffect(()=>{
        axios.get("http://localhost:2005/getchat/"+sender+"/"+reciver).then((resp)=>{
           if (resp.data.msg=="chat")
            {

                getchat(resp.data.chat);
                const newChat = resp.data.chat;
                if (JSON.stringify(newChat) !== JSON.stringify(prevChat)) {
                    getchat(newChat);
                    setPrevChat(newChat);
                    
                  }
    
            }
            else{
                alert("new chat")
            }
        })
    })
    var sender=localStorage.getItem("userlog");
    var reciver=localStorage.getItem("friendname");
    const send=(e)=>{
        e.preventDefault();
        let chating=document.getElementById("chat").value; 
        // console.log(chating)
     
    let data={
            sender:sender,
            reciver:reciver,
        chating:chating

        };
//     console.log(reciver)
        axios.post('http://localhost:2005/postchat',data).then((response)=>{
    if(response.data.msg=="sent")
        {
            document.getElementById("chat").value=""
            if (sentaudio.current) {
                sentaudio.current.play();
              }

            {
                <audio ref="audio_tag" src="./sent.mp3"  autoPlay style={{visibility:"hidden"}}/>
            }
        }
        else{
            alert("not sent")
        }
})

    }
    //console.log(chat)--
   
    const Delchat=(e)=>{

axios.delete("http://localhost:2005/delchat/"+e).then((re)=>{
    if(re.data.msg="delete")
    {
alert(re.data.msg)

    }
})
    }
    return(
<div id="chatdiv">
    <div style={{float:"left"}}>your id:<b>{localStorage.getItem("userlog")}</b></div>
    <div style={{float:"right"}}>friend id:<b>{localStorage.getItem("friendname")}</b></div>

    <form onSubmit={send}>
       
        <input
              type="text"
              placeholder="enter chat here"
            id="chat"
              required
            />
            <button type="submit" style={{height:"36px",width:"60px"}}><i class="fa-solid fa-paper-plane"></i></button>
    </form>
    <center>
    <div id="insidechat">
        <center>
        <table>
            <td>
                {
                    chat.map((ele,i)=>{
                        return(
                            <div style={{border:"1px solid black"}} >
                            
                                <tr> 
                                sender: {ele.sender}
                                    
                                </tr>
                                <tr>
                                   reciver: {ele.reciver}
                                </tr>
                                <tr>
                                    <div id="mag">
                                 message:   {ele.chating}
                                 </div>
                                </tr>
                                <tr>
                            
                                <button onClick={()=>Delchat(ele._id)}>delete</button>
                                </tr>
                                <br/>
                            </div>
                        )

                    })
                }
            </td>
        </table>
        </center>
    </div>
    </center>
    <audio ref={sentaudio} src="/sent.mp3" style={{ visibility: "hidden" }} />
    <audio ref={reciveaudio} src="/recived.mp3" style={{ visibility: "hidden" }} />

</div>
    )
}
export default Chat
