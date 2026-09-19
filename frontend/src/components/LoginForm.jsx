import { useState } from 'react';
import { useNavigate } from 'react-router';
import FormField from './shared/FormField';
import Button from './shared/Button';
import '../utils/validators';
import { globalPost } from './APIs/api';

const LoginForm = ({ setLoggedInUser }) => {
    
    const navigate = useNavigate();

    const [loginData, setLoginData]=useState({
            emailAddress: "",
            password: ""
            });

    const [errors, setErrors]=useState({});
    
    const validation = () => {
        const newErrors = {};
            if (!loginData.emailAddress)  newErrors.emailAddress = "Please provide your email";
            if (!loginData.password) newErrors.password = "Please provide your password";
            return newErrors;
     };
    
    const handleChange = (ev) => {
        const {name, value} = ev.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
        const handleSubmit = async (ev) => {
            ev.preventDefault();

            const validationErrors = validation();
            if(Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }
            
            try {
                const loggedInUser = await globalPost("/login", loginData);
                setLoggedInUser(loggedInUser);
                setLoginData({emailAddress: "", password: ""});
                navigate("/dashboard");
        } catch (err) {
            setErrors({loginErrors : err.message});
        }

    }
    
            return(
                <div className="login-form">
                    <h1>Welcome!</h1>

                        {errors.loginErrors && (
                            <div className="login-error-message">
                                {errors.loginErrors}
                                </div>
                        )}


                    <form onSubmit={handleSubmit} noValidate>
                        <FormField  label="Email:"
                                id="email"
                                type="email"
                                name="emailAddress"
                                value={loginData.emailAddress}
                                onChange={handleChange}
                                error={errors.emailAddress}
                                placeholder={"ChordRunner@gmail.com"}
                                required/>
                        <FormField  label="Password:"
                                id="password"
                                type="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                error={errors.password}
                                placeholder={"K3ys&Ch0rds"}
                                required/>
                        <Button id="submit-btn" type="submit" className="submit-btn" label="Login!"/>
                    </form>
                </div>
            );
        }

        export default LoginForm;