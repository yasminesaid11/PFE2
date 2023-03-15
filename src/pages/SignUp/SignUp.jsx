import React from 'react'
import './SignUp.css';
import register from "../../images/login.png";
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import NavBar1 from '../NavBar1/NavBar1';
const SignUp = () => {
  
  const navigate=useNavigate();

  const TosignIn=()=>{
   navigate("/signin");
  }
    const [values, setValues] = useState({
      phone:'',
      userName: '',
      adresse:'',
      email: '',
      password: '',
    });
    const [error, setError] = useState(null);

    const [errors, setErrors] = useState({
      phone:'',
      userName: '',
      adresse:'',
      email: '',
      password: '',
    });
    const handleClick=()=>{
      this.props.history.push("/signin") ;
    };
    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
     /*
      const { userName,phone,adresse, email, password } = values;
      
       
      let newErrors = {};
  
      if (!userName) {
        newErrors.userName = 'UserName est obligatoire';
      }
      if (!adresse) {
        newErrors.Name = 'adresse est obligatoire';
      }
      if (!phone) {
        newErrors.phone = 'phone est obligatoire';
      } else if (isNaN(phone)){
        newErrors.phone = 'phone incorrete';
      } else if  (phone.length < 8){
        newErrors.phone = 'phone incorrecte';

      }
  
      if (!email) {
        newErrors.email = 'Email est obligatoire';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email incorrecte';
      }
  
      if (!password) {
        newErrors.password = 'Password est obligatoire';
      } else if (password.length < 6) {
        newErrors.password = 'longeur au moins 6 caracteres';
      }
  
      setErrors(newErrors);*/
      console.log(values);
      axios.post('http://localhost/projet/api/add_user.php', values)
      .then(( response) => {
        if(response.data["success"]){
            navigate("/signin");
        }else {
          setError(response.data["message"]);
          console.log(response.data["message"]);
        }
      

        
      })
      .catch((error) => {
        console.error(error);
      });     
    
    };
    /*
    const form =new FormData();
    form.append('userName',values.userName);
    form.append('Name',values.Name);
    form.append('phone',values.phone);
    form.append('email',values.email);
    form.append('password',values.password);
    axios.post("http://localhost/pfe_backend/compte.php",form)
    .then(response=>alert(response.data))
    .catch(error=> alert(error));
*/
 
  return (
    <div>
   <body>
    <div class="container">
    <div class="overlay-container">

    <form action="#">
              <div className='tit'>
                <h3>Create Account</h3>
                </div>
        <input type="text" name="userName"  placeholder="Your userName"
        value={values.userName} onChange={handleChange} />
           {errors.userName && <span>{errors.userName}</span>}

      

      <input type="email" name="email"  placeholder="Your email"
        value={values.email} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}


<input type="text" name="adresse"  placeholder="Your adresse"
value={values.adresse} onChange={handleChange} />
 {errors.adresse && <span>{errors.adresse}</span>}



        <input type="text" name="phone"  placeholder="Your Phone"
         value={values.phone} onChange={handleChange} />
         {errors.phone && <span>{errors.phone}</span>}
      
        

       <input type="password" name="password"   placeholder="Your password"
         value={values.password} onChange={handleChange} />
         {errors.password && <span>{errors.password}</span>}
     
                <button class="ghost1" id="signIn">Sign Up</button>
            </form>
            </div>
        <div class="form-container sign-in-container">

            <div class="overlay">
               
                <div class="overlay-panel overlay-right">
                    <h1>Welcome back!</h1>
                    <img className="image"src={register}  /> 

                    <p>Si vous avez déja un compte vous pouvez connecter</p>
                    <button class="ghost" id="signUp" onClick={TosignIn}>Sign In </button>
                </div>
            </div>
        </div>
    </div>
    </body>
    </div>
 
  

  )
}


export default SignUp