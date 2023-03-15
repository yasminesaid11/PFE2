import React from 'react';
import './SingIn.css'; 
import axios from 'axios';

import user from "../../images/svg/user.svg";
import password from "../../images/svg/lock.svg";
import facebook from "../../images/svg/facebook.svg";
import linkedin from "../../images/svg/linkedin.svg";
import twitter from "../../images/svg/twitter.svg" ; 
import google from "../../images/svg/google.svg" ; 
import register from "../../images/register1.png";
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import NavBar1 from '../NavBar1/NavBar1';

const SingIn = () => {
   const navigate=useNavigate();
   const TosignUp=()=>{
    navigate("/signup");
   }
   const [Values,setValues]=useState({
    email: '',
    password: ''

   });
   const [error, setError] = useState(null);

   const [errors, setErrors] = useState({
    email: '',
   
    password: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...Values, [name]: value });
    console.log(Values);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = Values;
    
     
    let newErrors = {};

    if (!email) {
      newErrors.email = 'email est obligatoire';
    }

    if (!password) {
      newErrors.password = 'Password est obligatoire';
    }

    setErrors(newErrors);
    axios.post('http://localhost/projet/api/signin.php', Values)
    .then(( response) => {
      if(response.data["success"]){
          navigate("/add2d");
      }else {
        setError(response.data["message"]);
        console.log(response.data["message"]);
      }})
    .catch((error) => {
      console.error(error);
    }); 
    
  };

  return (<div>
    <body>
    <div class="container">
      
        <div class="form-container sign-in-container">
            <form action="#">
            <div className="tit">

                <h3>Sign in</h3>
                </div>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input className="zone" type="text" name="userName"    placeholder="UserName or Mail"
        value={Values.userName} onChange={handleChange} />
        {errors.userName && <span>{errors.userName}</span>}    
        <input className="zone" type="password" name="password"   placeholder="Your password " 
        value={Values.password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}      
                <a href="#">Forgot your password?</a>
                <button class="ghost1">Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
               
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <img className="image"src={register}  /> 

                    <p>Si vous n'avez pas un compte ,S'inscrire pour nous rejoindre</p>
                    <button class="ghost" id="signUp" onClick={TosignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </body>
    </div>
  )
}

export default SingIn