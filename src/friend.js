import axios from "axios"
import { useEffect, useState } from "react"

function Friend()
{

    const[usedata,getdata]=useState([])
    useEffect(()=>{
        let userlog=localStorage.getItem("userlog")
        if(!userlog)
            {
                alert("have to login to access this page")
                window.location.href="/login"
            }
            else{
                axios.get("https://sendchatback.onrender.com/friend").then((res)=>{
                    getdata(res.data.friend)
            
                   
                })
            }
    })
//     useEffect(()=>{
//         if(res.data.status=="connected")
//             {
// document.getElementById("but"+i).innerHTML="connected"
//             }
//         })

const cont=(x,i)=>{
let per=localStorage.getItem("userid")
localStorage.setItem("friendname",x)
console.log(localStorage.getItem("friendid"))
window.location.href="/chat"
}
const logout=()=>{
    localStorage.removeItem("userlog");

}
    return(

        <div>
            <button onClick={logout} id="logout">logout</button>

            <div id="friend">
                <table>
              
                {
        
                    usedata.map((ele,i)=>{
                        return(
                        <div>
                            <tr  >
                        <td className="row">id:{ele._id}</td>


                        <td className="row">{ele.name}</td>
                    
                       
                            <center>
                     <td className="row">  <button onClick={()=>cont(ele.name)}  >chat</button></td> 
                        </center>
                      </tr>
                        </div>
                        )
                    })
                }
</table>
            </div>

        </div>
    )
}
export default Friend
