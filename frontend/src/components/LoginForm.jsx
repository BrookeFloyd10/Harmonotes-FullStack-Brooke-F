import { useState } from 'react';
import FormField from './shared/FormField';
import Button from './shared/Button';
import '../utils/validators';

const LoginForm = () => {
    
        const isAnyFieldEmpty = Object.values(loginData).some(value => !value.trim());

    
            return(
                <div className="login-form">
                    <hi>Welcome!</hi>


                    <form onSubmit={handleSubmit} noValidate>
                        <FormField  label="Email:"
                                id="email"
                                type="email"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                                placeholder={"youremail@example.com"}
                                required
                                error={errors.email}/>
                        <FormField  label="Password:"
                                id="password"
                                type="text"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                placeholder={"Enter your password"}
                                error={errors.password}
                                required/>
                        <Button id="submit-btn" type="submit" disabled={isAnyFieldEmpty} className="submit-btn" label="Login!"/>
                    </form>
                </div>
            )

           
}

export default LoginForm
