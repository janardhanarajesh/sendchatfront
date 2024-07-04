import axios from "axios";
import { useEffect, useState } from "react"

function Chat()
{

    const [chat,getchat]=useState([])
    const [chut,newchat]=useState([])

    useEffect(()=>{
        if(!localStorage.getItem("userlog"))
            {
                alert("have to login first");
                window.location.href="/login"
            }
    },[1])
    useEffect(()=>{
        axios.get("https://sendchatback.onrender.com/getchat/"+sender+"/"+reciver).then((resp)=>{
           if (resp.data.msg=="chat")
            {
             

                    
                getchat(resp.data.chat);
                    
                   

                // alert");
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
        axios.post('https://sendchatback.onrender.com/postchat',data).then((response)=>{
    if(response.data.msg=="sent")
        {
            alert("sent");
        }
        else{
            alert("not sent")
        }
})

    }
    // c onsole.log(chat)
   
    return(
<div>
    <div style={{float:"left"}}>your id:<b>{localStorage.getItem("userlog")}</b></div>
    <div style={{float:"right"}}>friend id:<b>{localStorage.getItem("friendname")}</b></div>

    <form onSubmit={send}>
        <label>chat here</label>
        <input
              type="text"
              placeholder="enter here"
            id="chat"
              required
            />
            <input type="submit"/>
    </form>
    <div>
        <center>
        <table>
            <td>
                {
                    chat.map((ele,i)=>{
                        return(
                            <div>
                            
                                <tr> 
                                sender: {ele.sender}
                                    
                                </tr>
                                <tr>
                                   reciver: {ele.reciver}
                                </tr>
                                <tr>
                                    {ele.chating}
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
</div>
    )
}
export default Chat
