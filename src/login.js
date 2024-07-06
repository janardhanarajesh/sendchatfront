import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login()
{
    const[logdat,stulog]=useState({
        name:"",
        password:""
    })
    let user=logdat.name;
    let pass=logdat.password;

   const login=(e)=>{
e.preventDefault();
// console.log(user,pass)
axios.get("https://sendchatback.onrender.com/findata/"+user+"/"+pass).then((res)=>{
    console.log(res.data.msg)
    if(res.data.msg=="no")
        {

            
            alert("you have to register or invalid details")
            
        }
        else{
            let pid=res.data.ids;
        
            console.log(res.data.ids)
alert("logged in as"+" "+user)
localStorage.setItem("userlog",user);
localStorage.setItem("userid",pid);

window.location.href="/friend"

        }
});

    }
    
    
    return(
        <div>
            <center>
        <div id="logdiv">
        <br/>
        <br/>

            <form onSubmit={login}>
                <input type="text" onChange={(e)=>stulog({...logdat,name:e.target.value})} required className="inplog" placeholder="name"/>
                <br/>
                <br/>
                <br/>

                <input type="password" onChange={(e)=>stulog({...logdat,password:e.target.value})} required className="inplog" placeholder="password"/>
                <br/>
                <br/>

                <input type="submit" style={{height:"30px"}} value="sign in"/>

            </form>
            <Link to="/otp" style={{color:"white"}}>forgot password</Link>
        </div>
        </center>
        </div>
    )

}
export default Login
