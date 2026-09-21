import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";
import { isValidEmail } from "../../utils/validators";
import { globalPost } from "../APIs/api";

const ContactForm = () => {
    const [formData, setFormData]=useState({
        name: "",
        email: "",
        message: ""
    });

    const [ isSubmitted, setIsSubmitted ]=useState(false);

    const [ errors, setErrors ]=useState({});

    const validation = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Please enter your name.";
        if (!formData.email.trim()) newErrors.email = "Please enter your email";
        else if (!isValidEmail(formData.email)) newErrors.email = "Please enter a valid email.";
        if (!formData.message.trim()) newErrors.message = "Please enter a message";
            return newErrors;
    }

    const handleChange = (ev) => {
        const {name, value} = ev.target;
        setFormData((prevData) => ({
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
            await globalPost("/contact-messages", formData);
            setErrors({});
            setFormData({name: "", email: "", message: ""});
            setIsSubmitted(true);
        } catch (err) {
            setErrors({ submitError: "Something went wrong. Message was not submitted, please try again." })
            console.error("Contact form not submitted properly. Error:", err);
        }
    };
        return (
            <div className="contact-form">
                <h2>Get In Touch!</h2>

                {isSubmitted && (
                  <div className="success-message">
                    <p>Thank you! Someone will reach out shortly!</p>
                    <Button id="dismiss-btn" type="button" className="dismiss-btn" onClick={() => setIsSubmitted(false)} label="OK" />
                  </div>
                )}

                {errors.submitError && (
                    <p className="error-message">{errors.submitError}</p>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <FormField  label="Name:"
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={"Full Name"}
                                error={errors.name}
                                required/>
                    <FormField  label="Email:"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={"youremail@example.com"}
                                required
                                error={errors.email}/>
                    <FormField  label="Message"
                                as="textarea"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                maxLength="200" 
                                rows={8}
                                cols={20}
                                placeholder={"Your message here"}
                                error={errors.message}
                                required/>
                    <Button id="submit-btn" type="submit" className="submit-btn" label="Send"/>
                </form>
            </div>
        );
}

export default ContactForm;