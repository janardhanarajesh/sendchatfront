import axios from "axios";
import { useEffect } from "react";

function Reset()
{

    useEffect(()=>{
        if(!localStorage.getItem("userlog"))
        {
            alert("have to enter otp");
            window.location.href="/otp"
        }
    })
    const putpass=(e)=>{
e.preventDefault();
let newpass=document.getElementById("pass").value;
let user=localStorage.getItem("newpassuser");
axios.put("http://localhost:2005/newpass/"+newpass+"/"+user).then((resp)=>{
alert(resp.data.msg)
})
    }
    return(
        <div>
            <center>
        <div id="resdiv">

        <form onSubmit={putpass}>
        <br/>
        <br/>

            <input type="text" required placeholder="enter new password" id="pass"/>
            <br/>
            <br/>
            <br/>

            <input type="submit" value="update" style={{height:"25px"}}/>
            </form>
            </div>
            </center>
            </div>
    )
}
export default Reset