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
            <button onClick={logout}>logout</button>

            <div id="friend">
                <table>
              
                {
        
                    usedata.map((ele,i)=>{
                        return(
                        <div>
                            <td>
                        <tr>id:{ele._id}</tr>
</td>
<td>
                        <tr>{ele.name}</tr>
                        </td>
                        <td>
                            <center>
                        <tr><button onClick={()=>cont(ele.name)}  >chat</button></tr>
                        </center>
                        </td>
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
