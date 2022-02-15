import React from 'react'
import {useState} from 'react'
import swal from 'sweetalert';
import './Main.css'
import {useAuth} from '../context/AuthContext'

function Main() {
    const handleClick= async (event)=>{
        if([user.email.length]==0 && [user.pass.length]==0){
            swal("", "Enter your email and password!", "warning");
        }
        else{
        if([user.email.length]==0){
            swal("", "Enter your email!", "warning");
        }
        if([user.pass.length]==0){
            swal("", "Enter your password!", "warning");
        }
    
        if(user.email==="name@phystech.com" && user.pass==="phystech"){
            swal("Log in successful!","", "success");
        }
    }
        event.preventDefault();
        const{email,pass}= user;
        const res = fetch("https://phystech-01-default-rtdb.firebaseio.com/userDataRecords.json",
        {method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            email,
            pass,
        }),
        }
        );

    }
    const [user, setUser] = useState({
        email:"",pass:""
    });
    let name, value;

    const handleOnChange=(e)=>{
        name= e.target.name;
        value= e.target.value;

        setUser({...user, [name]:value});
    }
    const myStyle={
        height:"2em"
    }
    const {signup, currentUser}=useAuth()

    async function handleSubmit(e){
        e.preventDefault()
        try{
            await signup(user.email.current.value,user.pass.current.value)
        }
        catch{}
    }
  
  return (
    <div className='main' onSubmit={handleSubmit}>
        <div className="box">
        <h1>Log In Here</h1>
          {currentUser && currentUser.user.email}

<div className="username">
    <div className="image">
        <img src='/assets/user.png' style={myStyle}/>
    </div>
    <input type="text" value={user.email} name="email" onChange={handleOnChange} placeholder="Enter your email"></input>
</div> 

<div className="password">
    <div className="image">
    <img src='/assets/padlock.png' style={myStyle}/>
    </div>
    <input type="password" value={user.pass} name="pass" onChange={handleOnChange} placeholder="Enter your password"></input>
</div>
 <div className="btn">
 <button onClick={handleClick} >Log In</button>
 </div>
<h2>Forgot your password?</h2>
<h2>Don't have an account?</h2>

</div>
    </div>
)
}

export default Main