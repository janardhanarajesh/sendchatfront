import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Register() {
  const [studenti, setStudenti] = useState({
    name: '',
    password: '',
    mail: ''
  });
let nameu=studenti.name
  const check = (e) => {
    e.preventDefault();

    axios.get("https://sendchatback.onrender.com/checkdata/"+nameu)
      .then((ret) => {
        if (ret.data.msg=="no") {
          axios.post('https://sendchatback.onrender.com/register', studenti)
            .then((res) => {
              alert(res.data.msg);
              window.location.reload();
              window.location.href="/login"
            });
        } 
        else{
          alert("already registered");
          window.location.href="/login"
        }
      })
      .catch((error) => {
        console.error('There was an error making the request:', error);
      });
  };

  return (
    <div id="fro">
      <center id="fr">
        <div id="regsdiv">
          <h1 id="regshed">Registration</h1>
          <form onSubmit={check} action="#" autoComplete="off">
            <label className="laab">Name:</label>
            <input
              type="text"
              placeholder="name"
              id="rebranch"
              onChange={(e) => setStudenti({ ...studenti, name: e.target.value })}
              required
            />
            <br />

            <label className="laab">Password:</label>
            <input
              id="passreg"
              type="password"
              placeholder="password"
              onChange={(e) => setStudenti({ ...studenti, password: e.target.value })}
              required
            />
            <br />

            <label className="laab">Mail:</label>
            <input
              type="email"
              placeholder="recoverymail"
              onChange={(e) => setStudenti({ ...studenti, mail: e.target.value })}
              required
            />
            <br /><br />

            <input type="submit" value="register" />
          </form>
          <p>Already registered? <Link to="/login">Click here</Link></p>
        </div>
      </center>
    </div>
  );
}

export default Register;
