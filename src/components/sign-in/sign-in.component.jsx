import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.css';
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})

    }
    handleChange=event=>{
        const{value,name}=event.target;
        this.setState({[name]:value})
    }
    render(){

        return(
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Sign in With Your email and password</span>

          <form  onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email}  label="email" handleChange={this.handleChange} required/>
                {/* <label>Email</label> */}
                <FormInput  name="password" type="password" value={this.state.email}  label='password'
                handleChange={this.handleChange}
                required/>
                {/* <label >Password</label> */}
                <CustomButton type="submit" >SIGN IN</CustomButton>
                </form>

            </div>
        )
    }
}
export default SignIn;