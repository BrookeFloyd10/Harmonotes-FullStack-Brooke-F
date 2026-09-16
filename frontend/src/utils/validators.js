export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
export const isNotEmpty = (value) => value.trim().length > 0;
export const isStrongPassword = (value) => {
    return value.length >= 8 && /[A-Z]/.test(value) && 
    /[a-z]/.test(value) && 
    /[0-9]/.test(value) && 
    /[!@#$%^&*(),.?":{}|<>]/.test(value);
    
};
  
