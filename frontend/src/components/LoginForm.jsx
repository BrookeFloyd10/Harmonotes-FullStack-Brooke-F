import { useState } from 'react';
import FormField from './shared/FormField';
import Button from './shared/Button';
import '../utils/validators';

const LoginForm = () => {
    
    const [loginData, setLoginData]=useState({
            email: "",
            password: ""
            });
    
    const [ isSubmitted, setIsSubmitted ]=useState(false);
    
    const [ errors, setErrors ]=useState({});
    
    const validation = () => {
        const newErrors = {};
            if (!loginData.email)  newErrors.email = "Please provide your email";
            if (!loginData.password) newErrors.password = "Please provide your password";
            return newErrors;
     }
    
    const handleChange = (ev) => {
        const {name, value} = ev.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
        const handleSubmit = (ev) => {
            ev.preventDefault();
            const validationErrors = validation();
            if(Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }
            setErrors({});
            setLoginData({email: "", password: ""});
            setIsSubmitted(true);
        };
    
            return(
                <div className="login-signup-form">
                    <hi>Welcome!</hi>

                        {isSubmitted && (
                        <div className="success-message">
        
                        </div>
                        )}


                    <form onSubmit={handleSubmit} noValidate>
                        <FormField  label="Email:"
                                id="email"
                                type="email"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                                required
                                error={errors.email}/>
                        <FormField  label="Password:"
                                id="password"
                                type="text"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                error={errors.password}
                                required/>
                        <Button id="submit-btn" type="submit" className="submit-btn" label="Login!"/>
                    </form>
                </div>
            );
        }

        export default LoginForm;