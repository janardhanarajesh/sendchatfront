import axios from "axios";
import { useState } from "react";

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
axios.get("http://localhost:2006/findata/"+user+"/"+pass).then((res)=>{
    console.log(res.data.msg)
    if(res.data.msg=="no")
        {

            
            alert("you have to register or invalid details")
            // window.location.href="/"
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
            <form onSubmit={login}>
                <input type="text" onChange={(e)=>stulog({...logdat,name:e.target.value})} required/>
                <br/>
                <input type="password" onChange={(e)=>stulog({...logdat,password:e.target.value})} required/>
                <br/>
                <input type="submit"/>

            </form>
        </div>
    )

}
export default Login