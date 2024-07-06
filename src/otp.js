import axios from "axios";

function Otp()
{

    const sendotp=(e)=>{
        e.preventDefault();
        let nam=document.getElementById("nam").value;
        localStorage.setItem("newpassuser",nam)
        axios.get("https://sendchatback.onrender.com/finduser/"+nam).then((respo)=>{
if(respo.data.msg=="sent")
{
    var otp=Math.floor(Math.random()*60000)
    localStorage.setItem("otp",otp)
    // console.log(otp)
    axios.get("https://sendchatback.onrender.com/sendotp/"+nam+"/"+otp).then((response)=>{
        if(response.data.msg=="sent")
        {
            alert("otp sent to registerder email");
        }
        else{
            alert("otp not sent");

        }
    })
}
else{
    alert("not found");

}
        })
    setTimeout(removeotp,60000);

    }
    const removeotp=()=>{
        localStorage.removeItem("otp")
    }
    const valiotp=()=>{
       let userotp=prompt("enter otp");
       if(localStorage.getItem("otp")==userotp)
       {
        window.location.href="/reset"
    
       }
       else(
        alert("invalid otp")
       )
    }

    return(
        <div>
            <center>
        <div id="otpdiv">

            <form onSubmit={sendotp}>
<br/>
<br/>

<input type="text" required placeholder="enter your name" id="nam"/>
<br/>
<br/>
<br/>

<input type="submit" style={{height:"25px",textAlign:"center"}}/>
<br/>
<br/>

</form>
<button onClick={valiotp}>verify otp</button>
        </div>
        </center>
        note:have to enter otp with in <b>1 minute</b>
        </div>
    )
}
export default Otp
