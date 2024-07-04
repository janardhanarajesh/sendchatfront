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
            document.getElementById("chat").value=""
        }
        else{
            alert("not sent")
        }
})

    }
    // c onsole.log(chat)
   
    const delchat=(e)=>{
e.preventDefault();
axios.delete("http://localhost:2006/delchat/"+e).then((re)=>{
alert(re.data.msg)
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
                            
                            <button onclick={()=>delchat(ele._id)} >delete</button>
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
</div>
    )
}
export default Chat
